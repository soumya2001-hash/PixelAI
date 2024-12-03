PixelAI

PixelAI is an AI-powered image generation app that lets users create stunning images from text prompts.Build with cutting-edge technology, it combines AI with seamless user interface for a Creative interface.

Features: 
Generate high quality images from text prompts.  
User friendly interface for creating and exploring art.  
Backend support with MongoDB for storing image URLs.  
Scalable and optimized for fast responses.  
Vast community for exploring AI generated images and prompts used for creating them.  

Tech stack:   
Front-End: React.js, Tailwind.css  
Backend: Node.js Express.js  
Database: MongoDB  
AI: Stable Diffusion API for image generation  
Hosting: Netlify  

Installation:   
Pre-requisites:  
Node.js installed on your machine  
MongoDB set up(local or cloud instance)  
API key for Stable Diffusion  

Steps:
Clone the repository  
git clone https://github.com/soumya2001-hash/PixelAI.git  

Navigate to the project directory:    
cd PixelAI  

Install dependencies for the backend and frontend:  
cd backend  
npm install  
cd ../frontend  
npm install  

Setup environment variables:  
Create .env file in the backend with the following details.
MONGO_URI=<Your MongoDB connection string>  
DALL_E_API_KEY=<Your DALL-E API key>  

Start the development servers:
Backend:  
cd backend  
npm start  

Frontend:  
cd ../frontend  
npm start  

Usage:  
Enter a text prompt in the input filed.  
Click on generate image to create an image.  
Save the generated image for future reference if it aligns with your vision. Alternatively, you can refine the prompt or generate a new one to better suit your needs.  
Share it with the community for others to see.  

Contributing:  
Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.  



