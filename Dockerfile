# Create image based on the official Node 6 image from dockerhub
FROM nginx:stable-alpine

COPY dist/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose the port the app runs in
EXPOSE 80
