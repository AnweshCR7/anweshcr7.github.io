export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Anwesh Marwade.',
        headerTagline: [
                        
                        'Machine Learning | Computer Vision ',
                        
                        'Coding for Cause'
    ],
        contactEmail:'anweshcr7@gmail.com',
        // About Text
        abouttextcaption: "A curious developer currently pursuing masters in data science. Strive towards writing purposeful code with an intention to contribute to things that matter.",
        abouttext:"I am a highly motivated learner with a predisposition towards exploring new fields and technologies. Currently working towards a potential career at the intersection of Sports and Data Science, specifically targetting Computer Vision and Machine Learning.",
        aboutImage:'https://lh3.googleusercontent.com/pw/ACtC-3cQDqfBS_GopuBww2NWpg-XunQjHl2EWlNBuqoqf0l-BwDkpaFDl3ZUzoesiZprtTq4fvPR13jqL9gTYO20dcC9Y5xhKL9C8s5KQnJEwl7KNCUCmJ0t7k_eorRY6vWuaORO6KnXkV3qm9zPym9FVw4Flg=w779-h969-no',
       
       ShowAboutImage:true,
       // Change Projects Here 
       projects:[
           {
            id: 1,
            title:'Expected Goal Value', //Project Title - Add Your Project Title Here
             service:'Computer Vision Intern @BeyondSports', // Add Your Service Type Here
             description:'Modelled the likelihood of scoring a goal (in Football) using sequential models that learn from a sequence of event frames leading upto a goal. This project was based on training sequence based models like LSTMs and Conditional Random Fields (beginning with simple classifiers as a PoC) to predict the Expected Goal Value as a measure of the chance of actually scoring a goal.', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://github.com/AnweshCR7/anweshcr7.github.io/blob/dev-react/src/assets/egv.png?raw=true",
             //Project URL - Add Your Project Url Here
             url:'https://www.beyondsports.nl'
            },
            {
                id: 2,
                title: 'Auto Code Completion',
                service: 'ML for Software Engineering',
                description:'Developed a code completion system for Machine Learning for Software Engineering course at TU Delft (IN4334). Built the system from scratch based on an encoder-decoder architecture involving LSTMs that enhanced using the attention mechanism.', // Add Your Service Type Here
                imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'https://github.com/AnweshCR7'
            },
            { 
                id: 3,
                title: 'Project Three',
                service: 'Web App',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
            },
            {
                id: 4,
                title: 'Project Four',
                service: 'Branding',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/anweshcr7',
                img_src: 'https://raw.githubusercontent.com/AnweshCR7/anweshcr7.github.io/9d177e69ae9b7cc0e4d8869e57500890293098bd/src/assets/gihub.svg'
            },

            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/anwesh-marwade-87172211b',
                img_src: "https://raw.githubusercontent.com/AnweshCR7/anweshcr7.github.io/e30e0126fd860292e04f0df34cd7a188084fe1d5/src/assets/linkedin.svg"
            }
            // {
            //     name: 'Instagram',
            //     url: 'https://www.instagram.com/cv.uidesign/'
            // }

        ]
    }