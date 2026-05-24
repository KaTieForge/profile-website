Katherine Clark
Demonstration of deploying website to github pages.

# Profile Website

## Purpose
This repository was created for a class assignment focused on learning Git version control and publishing a website to a public GitHub repository. It demostrates basic source control workflow and website deployment practices.

## Steps I took to Set Up Git and Push My Code
1. Created a local project folder for my website files.
2. Initialized Git using `git init`.
3. Added project files using `git add .`
4. Created the first commit.
5. Created a public repository on GitHub using a remote origin.
6. Pushed the project files to GitHub.

## Challenges I Faced and How I Resolved Them
One challenge I faced was understanding how my local project folder connected to the GitHub repository online. I learned that I needed to first initialize Git locally, then add the GitHub repository as a remote, and finally push my files using git commands.

## GitHub Actions Deployment

This project uses Github Actions to automatically deploy the website to GitHub Pages.

### Workflow Setup Steps
1. Opened the repository settings.
2. Configured GitHub Pages to use GitHub Actions as the deployment source.
3. Created a `.github/workflows` directory.
4. Added a `deploy.yml` workflow file.
5. Configured the workflow to deploy from the `main` branch.
6. Pushed the workflow to the `main` branch.
7. Verified the deployment through Actions tab and live URL.

### Challenges and Solutions
One challenge was understanding the `path` setting in the workflow configuration. Since this project is a static HTML, CSS, JavaScript website, deploying the entire repository using `path: '.'` was the correct solution.

### Triggering Deployment
The deployment workflow automatically runs whenever changes are pushed to the `main` branch.
