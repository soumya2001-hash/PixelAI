import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const router = express.Router();


router.route('/').get((req, res) => {
    res.send('Hello from Stable Diffusion')
})

const url = "https://stablediffusionapi.com/api/v3/dreambooth";

router.route('/').post(async (req, res) => {
    const {prompt} = req.body
    const payload = {
        key: "4y87lGlcKooNFchtQ91Z2PGVA9tHSnSzHdbaq3GXh7bulT1D97rbvPBScqfm",
        model_id: "dreamshaper-v7",
        prompt: prompt,
        negative_prompt: "painting, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, deformed, ugly, blurry, bad anatomy, bad proportions, extra limbs, cloned face, glitchy, double torso, extra arms, extra hands, mangled fingers, missing lips, ugly face, distorted face, extra legs, anime",
        width: "512",
        height: "512",
        samples: "1",
        num_inference_steps: "30",
        safety_checker: "no",
        enhance_prompt: "yes",
        seed: null,
        guidance_scale: 7.5,
        multi_lingual: "no",
        panorama: "no",
        self_attention: "no",
        upscale: "no",
        embeddings: "embeddings_model_id",
        lora: "lora_model_id",
        webhook: null,
        track_id: null
    };
    
    const headers = {
        'Content-Type': 'application/json'
    };
    
    await axios.post(url, payload, { headers })
        .then(response => {
            // console.log(response.data.output[0]);
            const image = response.data.output[0];
            res.status(200).json({ photo: image });
        })
        .catch ((error) => {
            console.log("Error:", error.response ? error.response.data : error.message);
            res.status(500).send(error?.response?.data?.error?.message || "An error occurred with the Stable Diffusion API request.");
        }
        )
        

    
})

export default router;
