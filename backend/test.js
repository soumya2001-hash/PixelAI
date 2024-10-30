

import axios from 'axios';

const url = "https://stablediffusionapi.com/api/v3/dreambooth";

const payload = {
    key: "4y87lGlcKooNFchtQ91Z2PGVA9tHSnSzHdbaq3GXh7bulT1D97rbvPBScqfm",
    model_id: "dreamshaper-v7",
    prompt: "cat eating 8K",
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

axios.post(url, payload, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error:", error.response ? error.response.data : error.message);
    });
