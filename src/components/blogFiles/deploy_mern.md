
# Deploying a MERN Application on Linode Using Nginx and PM2

Deploying a **MERN** (MongoDB, Express, React, Node.js) application requires proper setup and configuration to ensure the frontend, backend, and database are properly connected and managed. In this guide, I will show you how to deploy a MERN app on a Linode server using **Nginx** for reverse proxy and **PM2** for process management.

## Prerequisites

1. A MERN application hosted in a Git repository.
2. A Linode server instance.
3. A domain name (optional, but recommended).
4. Basic knowledge of Linux commands.

Let's get started.

---

## Step 1: Set Up Your Linode Server

### 1.1. First Login
Start by logging into your Linode server using SSH:

```bash
ssh root@<your-server-ip>
```

### 1.2. Update and Upgrade Packages
It's always a good practice to ensure that your Linux system is up-to-date:

```bash
apt update && apt upgrade
```

### 1.3. Create a New User and Add to Sudo Group
Create a new user to manage the deployment process:

```bash
adduser <username>
usermod -aG sudo <username>
```

After creating the user, log out from the root user:

```bash
logout
```

Now, log back in as the new user:

```bash
ssh <username>@<your-server-ip>
```

Check if the new user has sudo privileges:

```bash
sudo -v
```

---

## Step 2: Secure the Server

### 2.1. Create SSH Key Authentication
Generate an SSH key pair on your local machine:

```bash
ssh-keygen -b 4096
```

Transfer the public key to the Linode server:

- **Windows**:
  ```bash
  scp $env:USERPROFILE/.ssh/id_rsa.pub <username>@<your-server-ip>:~/.ssh/authorized_keys
  ```
- **Mac/Linux**:
  ```bash
  scp ~/.ssh/id_rsa.pub <username>@<your-server-ip>:~/.ssh/authorized_keys
  ```

### 2.2. Configure SSH
Open the SSH configuration file:

```bash
sudo nano /etc/ssh/sshd_config
```

Change the default SSH port to a non-standard port (e.g., 2222). After editing, restart SSH:

```bash
sudo systemctl restart sshd
```

Login again with the new SSH port:

```bash
ssh <username>@<your-server-ip> -p <new-ssh-port>
```

### 2.3. Set Up Firewall
Install **UFW** (Uncomplicated Firewall):

```bash
sudo apt install ufw
```

Allow the necessary ports (SSH, HTTP, HTTPS):

```bash
sudo ufw allow <ssh-port-number>
sudo ufw allow http
sudo ufw allow https
```

Enable the firewall:

```bash
sudo ufw enable
```

---

## Step 3: Install Node.js and Git

### 3.1. Install Node.js
Follow the [NodeSource installation guide](https://github.com/nodesource/distributions#installation-instructions) to install Node.js. For example:

```bash
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify the installation:

```bash
node --version
npm --version
```

### 3.2. Install Git
Install Git to clone your project repository:

```bash
sudo apt install git
git --version
```

---

## Step 4: Set Up the MERN Application

### 4.1. Clone the MERN App Repository
Navigate to your apps folder and clone your repository:

```bash
mkdir apps
cd apps
git clone <your-repo-url>
```

### 4.2. Install Dependencies
Navigate to your **backend** and **frontend** directories and install dependencies:

```bash
cd backend
npm install

cd ../frontend
npm install
npm run build  # Build the React code
```

---

## Step 5: Set Up PM2 for Process Management

### 5.1. Install PM2 Globally
PM2 will help you manage and keep your Node.js application running:

```bash
sudo npm install -g pm2
```

### 5.2. Start Your Backend Server with PM2
Once the backend is set up, you can start it using PM2:

```bash
cd backend
pm2 start server.js  # or dist/server.js if using TypeScript
```

Check the status of your PM2 processes:

```bash
pm2 status
```

---

## Step 6: Set Up Nginx as a Reverse Proxy

### 6.1. Install Nginx
Nginx will act as a reverse proxy to forward requests to your Node.js application:

```bash
sudo apt install nginx
```

### 6.2. Configure Nginx
Open the Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/default
```

Modify the configuration to point to your React build for frontend requests and to your Node.js server for API requests. Example configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /home/<username>/apps/<app-folder>/frontend/build; # Adjust to your app's path

    location / {
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:5000;  # Adjust to your backend port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 6.3. Check and Restart Nginx
Ensure the Nginx configuration is correct:

```bash
sudo nginx -t
```

Restart Nginx to apply the changes:

```bash
sudo service nginx restart
```

---

## Step 7: Set Up SSL with Certbot (Optional)
For added security, you can use **Certbot** to obtain an SSL certificate:

Follow the instructions at [Certbot's official site](https://certbot.eff.org/) to install SSL on Nginx.

---

## Conclusion

Congratulations! You've successfully deployed a MERN app on a Linode server using Nginx and PM2. Now your application is running in production with Nginx handling frontend and backend requests, and PM2 managing the backend processes.
