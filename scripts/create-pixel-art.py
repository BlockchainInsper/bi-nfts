import cv2
import numpy as np
import glob

def read_file(filename):
  img = cv2.imread(filename)
  scale_percent = 40 # percent of original size
  width = int(img.shape[1] * scale_percent / 100)
  height = int(img.shape[0] * scale_percent / 100)
  dim = (width, height)
  
  resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
  return resized

def edge_mask(img, line_size, blur_value):
  gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  gray_blur = cv2.medianBlur(gray, blur_value)
  edges = cv2.adaptiveThreshold(gray_blur, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, line_size, blur_value)
  return edges

def color_quantization(img, k):
  # Transform the image
  data = np.float32(img).reshape((-1, 3))

  # Determine criteria
  criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 20, 0.001)

  # Implementing K-Means
  ret, label, center = cv2.kmeans(data, k, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)
  center = np.uint8(center)
  result = center[label.flatten()]
  result = result.reshape(img.shape)
  return result


for file_id, file_name in enumerate(list(glob.glob(r"C:\Users\Fernando\Downloads\ProjetoNFT\Projeto NFT Fotos\Foto profissional (File responses)\*"))):

  print(f"Creating pixel art for: {file_id}")

  img = read_file(file_name)

  line_size = 7
  blur_value = 7
  edges = edge_mask(img, line_size, blur_value)

  total_color = 9
  img = color_quantization(img, total_color)

  # Get input size
  height, width = img.shape[:2]

  # Desired "pixelated" size
  w, h = (128, 128)

  # Resize input to "pixelated" size
  temp = cv2.resize(img, (w, h), interpolation=cv2.INTER_LINEAR)

  # Initialize output image
  output = cv2.resize(temp, (width, height), interpolation=cv2.INTER_NEAREST)

  # cv2.imshow("Teste", img)
  cv2.imwrite(f"scripts/2021.2/images/{file_id}.jpg", output)
