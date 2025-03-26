# Flask App Deployment using Docker on AWS EC2

## Overview
This project demonstrates how to **containerize a Flask application** using **Docker** and deploy it on an **AWS EC2 instance**. The Flask app serves **real estate web pages** and is accessible over the internet by configuring **security groups** in AWS.

## Tech Stack & Skills Applied
- **Flask** (Python Web Framework)
- **Docker** (Containerization)
- **AWS EC2** (Cloud Deployment)
- **Linux (Ubuntu VM)**
- **Networking & Security Groups**

---
## Steps to Reproduce

### 1. Clone the Repository
```sh
git clone https://github.com/Mohitmatte/Docker_Mini_Project.git
cd flask-docker-app
```

### 2. Create a Virtual Environment (Optional)
```sh
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
```

### 3. Install Dependencies
```sh
pip install -r requirements.txt
```

### 4. Flask Application (app.py)
Ensure the Flask app runs on `0.0.0.0` to be accessible externally:
```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
```

### 5. Dockerfile
```dockerfile
# Use official Python image
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Expose port 5000
EXPOSE 5000

# Command to run the app
CMD ["python", "app.py"]
```

### 6. Build and Run Docker Container
```sh
docker build -t flask_app .
docker run -d -p 5000:5000 flask_app
```

### 7. Deploy on AWS EC2
1. **Launch an Ubuntu EC2 instance**.
2. **Install Docker on EC2**:
    ```sh
    sudo apt update
    sudo apt install docker.io -y
    ```
3. **Transfer project files to EC2** (using SCP or Git clone).
4. **Run the container**:
    ```sh
    docker build -t flask_app .
    docker run -d -p 5000:5000 flask_app
    ```
5. **Update AWS Security Group** to allow inbound traffic on port **5000** (only for trusted IPs).
6. **Access Flask App** from browser (use EC2 Public IP carefully and restrict access where needed).

### 8. Push Docker Image to Docker Hub
1. **Login to Docker Hub**:
    ```sh
    docker login
    ```
2. **Tag and Push the Image**:
    ```sh
    docker tag flask_app your-dockerhub-username/flask_app:latest
    docker push your-dockerhub-username/flask_app:latest
    ```

---
## Expected Output
Once deployed, accessing the application should display a **real estate web page** with property listings and details.

## Author
[**MOHIT D MATTE**](https://github.com/Mohitmatte)

## License
This project is open-source and available under the **MIT License**.

