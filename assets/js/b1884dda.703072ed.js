"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[151],{8128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const s={title:"How to Use Astria.ai's Multi-Pass Inference for Highly Controlled Stable Diffusion Image Generation",description:"How to Generate Striking Images with Astria.ai's Multi-Pass Inference"},o="How to Use Astria.ai's Multi-Pass Inference for Highly Controlled Stable Diffusion Image Generation",r={permalink:"/articles/multi-pass-inference",source:"@site/blog/multi-pass-inference.md",title:"How to Use Astria.ai's Multi-Pass Inference for Highly Controlled Stable Diffusion Image Generation",description:"How to Generate Striking Images with Astria.ai's Multi-Pass Inference",date:"2024-02-04T13:12:25.000Z",formattedDate:"February 4, 2024",tags:[],readingTime:8.665,hasTruncateMarker:!1,authors:[],frontMatter:{title:"How to Use Astria.ai's Multi-Pass Inference for Highly Controlled Stable Diffusion Image Generation",description:"How to Generate Striking Images with Astria.ai's Multi-Pass Inference"},prevItem:{title:"Generate On-Brand Corporate Headshots in Minutes by Fine-Tuning Stable Diffusion Models on Astria.ai",permalink:"/articles/on-brand"}},l={authorsImageUrls:[]},d=[{value:"What Is Multi-Pass Inference?",id:"what-is-multi-pass-inference",level:2},{value:"1. Iterative Refinement",id:"1-iterative-refinement",level:3},{value:"2. Choice over base model",id:"2-choice-over-base-model",level:3},{value:"3. Increased Precision and Detailing",id:"3-increased-precision-and-detailing",level:3},{value:"4. Balancing Foreground and Background",id:"4-balancing-foreground-and-background",level:3},{value:"How Multi-Pass Inference Can Benefit Your Business",id:"how-multi-pass-inference-can-benefit-your-business",level:2},{value:"How Astria.ai makes Multi-pass inferencing easy",id:"how-astriaai-makes-multi-pass-inferencing-easy",level:2},{value:"Step-by-Step Guide to Creating Images for a Sportswear Brand Using Multi-Pass Inferencing",id:"step-by-step-guide-to-creating-images-for-a-sportswear-brand-using-multi-pass-inferencing",level:2},{value:"Step 1: Training",id:"step-1-training",level:3},{value:"Step 2 Inference",id:"step-2-inference",level:3},{value:"Step 3: Examples",id:"step-3-examples",level:3},{value:"Final Note",id:"final-note",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(c,(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to Astria.ai."),(0,n.kt)("p",null,"In our first blog post, we\u2019ll take a deep dive into how you can generate very detailed images using a multi-pass inference method. We\u2019ll show you how to structure high-quality prompts to generate visuals of professional quality."),(0,n.kt)("h2",{id:"what-is-multi-pass-inference"},"What Is Multi-Pass Inference?"),(0,n.kt)("p",null,"First, let\u2019s discuss what multi-pass inference is. Multi-pass inference is essentially a technique where you can generate the background of the composition independently from the foreground. On Astria.ai this control is achieved through multiple breaks in the prompting technique. The base image (i.e. the background elements) is generated separately via the first part of the prompt. Then using the next breaks in the prompt the subject is in-painted onto the base image."),(0,n.kt)("p",null,"Here's how multi-pass inference enhances control over the background of an image:"),(0,n.kt)("h3",{id:"1-iterative-refinement"},"1. Iterative Refinement"),(0,n.kt)("p",null,"In a multi-pass inference, you have the opportunity to adjust and refine the background in a separate pass. This iterative process allows you to steer the image generation towards your desired outcome."),(0,n.kt)("h3",{id:"2-choice-over-base-model"},"2. Choice over base model"),(0,n.kt)("p",null,"Multi-pass inference allows for choice over the base model thereby giving the users the option to use a variety of pre-trained models like Realistic Vision, Absolute Reality, and other Stable Diffusion models."),(0,n.kt)("h3",{id:"3-increased-precision-and-detailing"},"3. Increased Precision and Detailing"),(0,n.kt)("p",null,"With multiple inference steps, you have more chances to introduce specific details or adjustments to the background. This can include changing its color scheme, adding or removing elements, or altering its overall style. Such precision is often not achievable in a single pass, where the model's output is more dependent on the initial prompt and less on a multi-step method."),(0,n.kt)("h3",{id:"4-balancing-foreground-and-background"},"4. Balancing Foreground and Background"),(0,n.kt)("p",null,"Multi-pass inference allows for a more balanced composition between the foreground and the background so that you can modify the background in a way that it complements the foreground elements more effectively."),(0,n.kt)("p",null,"As an example take a look at these two images of a man wearing sportswear and posing inside a gym. The first one was generated in a single prompt, while for the second one we used a multi-pass approach."),(0,n.kt)("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"1.5rem"}},(0,n.kt)("div",null,(0,n.kt)("figcaption",null,"Without multi-pass"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(8565).Z,width:"1599",height:"1999"}))),(0,n.kt)("div",null,(0,n.kt)("figcaption",null,"With multi-pass"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(9569).Z,width:"1280",height:"1600"})))),(0,n.kt)("p",null,"As you can see in the second image the background has more character to it. The elements of the gym are more prominent as compared to the former."),(0,n.kt)("h2",{id:"how-multi-pass-inference-can-benefit-your-business"},"How Multi-Pass Inference Can Benefit Your Business"),(0,n.kt)("p",null,"The enhanced control over image backgrounds provided by multi-pass inference offers significant benefits for businesses in various domains. By precisely tailoring image backgrounds, companies can maintain a consistent visual brand identity, crucial for marketing, advertising, and establishing a strong social media presence."),(0,n.kt)("p",null,"For e-commerce and retail sectors, the background of product images plays a critical role in shaping customer perception. Tailoring these backgrounds to complement the products not only enhances their appeal but also provides clearer context, which can lead to increased sales."),(0,n.kt)("p",null,"Moreover, multi-pass inference enables rapid and cost-effective creation of high-quality, bespoke images. This reduces the reliance on expensive photoshoots and graphic design work, presenting a more economical approach to content creation. Businesses can easily modify image backgrounds to suit various platforms and formats, such as social media, websites, and print media, ensuring optimal visual presentation across all channels."),(0,n.kt)("p",null,"Lastly, in a digital landscape overflowing with visual content, unique and tailored images with custom backgrounds provide businesses with a competitive edge. Such visuals are more likely to capture audience interest in a crowded market, standing out from standard, generic content. Therefore, the ability to control image backgrounds through multi-pass inference is not just a technical advantage but a strategic tool for branding, marketing, product presentation, and creating visually compelling content that differentiates a business in the market."),(0,n.kt)("h2",{id:"how-astriaai-makes-multi-pass-inferencing-easy"},"How Astria.ai makes Multi-pass inferencing easy"),(0,n.kt)("p",null,"Multi-pass inferencing, particularly in the context of advanced generative models like Stable Diffusion, often requires a developer's expertise due to several technical complexities. At Astria.ai, we provide a user-friendly apis that can significantly simplify this process for users who do not possess extensive technical know-how."),(0,n.kt)("p",null,"Let\u2019s first understand how a developer\u2019s expertise is needed and then we\u2019ll show how Astria.ai makes this process easier."),(0,n.kt)("p",null,"If one were to fine-tune and implement Stable Diffusion for multi-pass inferencing one would need a fair understanding of how these machine learning models work so that they can adjust parameters for different passes. This would require a fair amount of coding skills especially for customizing the inference process, integrating different components (like schedulers, encoders, decoders), and handling data preprocessing and postprocessing. Developers must be proficient in relevant programming languages and frameworks."),(0,n.kt)("p",null,"Moreover each pass in multi-pass inferencing may require adjustments to optimize the output. Developers need to troubleshoot issues, fine-tune parameters, and experiment with different configurations to achieve the desired results, which demands both technical skills and problem-solving abilities. Lastly, generative models can be resource-intensive. Developers need to manage and optimize the use of computational resources like GPUs, especially when working with large models or high-resolution images."),(0,n.kt)("p",null,"Astria.ai simplifies the above procedures by providing simple APIs that abstract the complexities of the underlying model. The platform also comes with pre-configured settings and templates showcased in the gallery that users can select from, reducing the time to do prompt engineering, and helping understand the breadth of options available. This includes predefined prompts, styles, and optimization settings. Apart from this Astria also handles the computational resource management in the background, allowing users to focus on the creative aspects of image generation without worrying about technical constraints."),(0,n.kt)("p",null,"Overall, while multi-pass inferencing with AI models requires considerable technical expertise due to its complexity, a platform like Astria.ai democratizes this capability by providing easy-to-use api and automated workflows, making advanced image generation accessible to developers."),(0,n.kt)("h2",{id:"step-by-step-guide-to-creating-images-for-a-sportswear-brand-using-multi-pass-inferencing"},"Step-by-Step Guide to Creating Images for a Sportswear Brand Using Multi-Pass Inferencing"),(0,n.kt)("h3",{id:"step-1-training"},"Step 1: Training"),(0,n.kt)("p",null,"First, create a fine-tune of your subject."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(7074).Z,width:"959",height:"845"})),(0,n.kt)("p",null,"Select the model type as LORA. This is a fast and efficient way to train the model, as it only trains an adapter layer on top of the base model, instead of training all the weights which is typically the case if we select the Checkpoint Model type."),(0,n.kt)("p",null,"We used the following images of a male model obtained from a royalty free collection (Pixabay):"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(1619).Z,width:"1600",height:"1600"})),(0,n.kt)("p",null,"Once the tune is ready, we can begin to prompt. Click on your tune."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(8069).Z,width:"1454",height:"846"})),(0,n.kt)("h3",{id:"step-2-inference"},"Step 2 Inference"),(0,n.kt)("p",null,"Let\u2019s first look at the structure of our prompt. Suppose you have to create images to market a sportswear brand."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"(medium shot) of a male model wearing hiking clothes and shoes, standing in a dense forest, behind him is a small waterfall.\nBREAK photorealistic and highly detailed\nBREAK ohwx man wearing hiking clothes and shoes <lora:960310:1.0>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The first line contains the base prompt to generate the background and the overall composition."),(0,n.kt)("li",{parentName:"ul"},"The second line is a common prompt that is added both to the base prompt and the person prompt, in order to avoid repetition."),(0,n.kt)("li",{parentName:"ul"},"The third line is the person prompt, to detail how our subject is composed in the foreground. The statement - ","<","lora:960310:1.0> - is added to load the fine-tuned model of our subject.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Negative Prompt: (brand logos on t-shirt), (worst quality, greyscale), watermark, username, signature, text, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, jpeg artifacts, bad feet, extra fingers, mutated hands, poorly drawn hands, bad proportions, extra limbs, disfigured, bad anatomy, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, mutated hands, fused fingers, too many fingers, long neck\n")),(0,n.kt)("p",null,"The negative prompt is a list of prompts we want to avoid in our generated image. Anything placed in parentheses applies extra weights to that prompt."),(0,n.kt)("p",null,"We can add an input image if we want our generated image to follow an input template. On the ControlNet Hint dropdown menu, we can select pose, if we want to copy the pose of the subject from the input image. Select the Text2img toggle to be true, that\u2019ll preserve the pose of the image. (recommended). If you want the semantics i.e. the looks and feels of the original image as well, then go for Img2img."),(0,n.kt)("p",null,"For example, let\u2019s take this pose as our input image:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(2380).Z,width:"1280",height:"853"})),(0,n.kt)("p",null,"Also, keep the Inpaint Faces and Face Swap toggle on. Inpaint Faces iterates one more time over the faces of the subject to ensure that there is no distortion in the outcome, while the Face Swap option ensures that the face of our model is taken from the training images and swapped in the generated image to enhance resemblance in the final output."),(0,n.kt)("p",null,"Let\u2019s look at the result of our first prompt:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(2820).Z,width:"1600",height:"1097"})),(0,n.kt)("p",null,"As you can see, the ControlNet has ensured that the output pose is similar to the pose of the input image."),(0,n.kt)("h3",{id:"step-3-examples"},"Step 3: Examples"),(0,n.kt)("p",null,"Prompt 2:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"a man at the finish line of a race on an olympic track\nBREAK sharp details\nBREAK ohwx man wearing running clothes and shoes, jubilant expression on his face&lt;lora:960310:1.0>\n\nNegative: anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, long neck, disfigured, fused lips,\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(8277).Z,width:"1536",height:"1920"})),(0,n.kt)("p",null,"Prompt 3:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"full body workout in a vibrant gym, action, perspective, speed, movement, ripped, push ups fit\nBREAK sharp details, realistic image, Porta 160 color, ARRI ALEXA 65\nBREAK ohwx man doing push-ups, intense look on his face <lora:960310:1.0>\n\nNegative: anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, long neck, disfigured, fused lips,\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(86).Z,width:"1280",height:"1600"})),(0,n.kt)("p",null,"Prompt 4:\n(wide shot) of a man walking at night on the streets of New York, warm lighting, photorealistic"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"BREAK\nBREAK ohwx man wearing casual sports wear&lt;lora:960310:1.0>\nNegative: hat, cartoon, ugly\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(8738).Z,width:"1280",height:"1600"})),(0,n.kt)("h2",{id:"final-note"},"Final Note"),(0,n.kt)("p",null,"The above steps can be used to generate product photography or e-commerce images. With multi-pass inference, you can gain a huge amount of control over your image backgrounds vis a vis the foreground. This technique allows you to iteratively refine and tailor the background details, ensuring that they align with your vision and objectives."),(0,n.kt)("p",null,"Whether you're looking to create images for branding, marketing, storytelling, or artistic expression, multi-pass inference by Astria.ai provides the flexibility and precision to shape the background just as you need it. You can now harness this tool to bring depth, context, and nuance to your visual content, making your image speak in harmony with your creative goals."))}u.isMDXComponent=!0},86:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image1-ed2246b12f83db790d137c93ec375a7d.png"},7074:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image10-6d93e8d9a2d4a97f2b8965d686d93489.png"},8738:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image2-ecaf6b1d065d3eb6c57c399392ee34e3.png"},8069:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image3-fe71a43fd1042a1c53ef41ccb4493c0e.png"},1619:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image4-3d68ca1fd77775a75949e0fdea948ede.jpg"},2380:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image5-8fb740755774cf33efb7b8cf6deb3c60.jpg"},9569:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image6-75d8f7c291788629a5e79224da37059c.png"},8565:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image7-93a3f8e6eb0be8b0e45d06ff58a44e71.png"},2820:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image8-530b7527b4bd99a570acb0179aafcb36.png"},8277:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image9-4c157fa32c1049e695850306078a6fe1.png"}}]);