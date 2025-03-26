# Use official Python image
FROM python:3.9

# Set working directory inside container
WORKDIR /app

# Copy dependency list and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application files
COPY . .

# Expose the Flask port
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.py"]
