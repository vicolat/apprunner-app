# Use Nginx as base image
FROM nginx

# Copy all files in current folder to Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80