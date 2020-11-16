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
        phraseline:"https://github.com/AnweshCR7/anweshcr7.github.io/blob/dev-react/src/assets/about_quote_transparent.gif?raw=true",
        abouttextcaption: "A curious developer currently pursuing masters in Data Science. Strive towards writing purposeful code with an intention to contribute to important causes.",
        abouttext: "Currently working on my final year thesis with the Computer Vision lab at TU Delft, investigating the role of convolutional networks in contactles (remote) photoplethysmography or r-PPG.",
        abouttextGeneral:"I am a highly motivated learner with a predisposition towards exploring new fields and technologies. Contemplating a potential career at the intersection of Sports and Data Science, specifically pertaining to Computer Vision and Machine Learning. Started out as a Software Engineer and moved to Full Stack Web Development having put myself in a variety of roles before pursuing a masters degree.",
        abouttextPersonal:"When the day is over, I am a hardcore football fan (read Manchester United), a fitness enthusiast and am known to show an unusual amount love for the thriller/horror genre. I like meeting new people as it allows me to gain different perspectives at life. Learnt to appreciate small-talk although I've been told, I fail miserably at making good jokes. Passionate about coding for a cause and ideating interesting projects which I would like to pursue part time. Always up for a 5K run!",
        aboutImage:'https://github.com/AnweshCR7/anweshcr7.github.io/blob/dev-react/src/assets/profile_img.jpg?raw=true',
       
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
                imageSrc: "https://github.com/AnweshCR7/anweshcr7.github.io/blob/dev-react/src/assets/codecomplete.png?raw=true",
                url: 'https://github.com/AnweshCR7'
            },
            { 
                id: 3,
                title: 'ZoloStays',
                service: 'Software Developer',
                description: 'Worked as a full stack developer, responsible for building and maintaining a scalable ERP solution for the start-up, using React and Node.js',
                imageSrc: "https://github.com/AnweshCR7/anweshcr7.github.io/blob/dev-react/src/assets/zelo.png?raw=true",
                url: 'https://www.linkedin.com'
            },
            {
                id: 4,
                title: 'General Electric Digital',
                service: 'Software Engineer',
                description: "Joined GE as a fresher and worked as a Software Development Specialist at GE Digital, Bengaluru for almost 2 years starting 2017",
                imageSrc: "https://github.com/AnweshCR7/anweshcr7.github.io/blob/dev-react/src/assets/gr_digital.png?raw=true",
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
                img_src: 'https://raw.githubusercontent.com/AnweshCR7/anweshcr7.github.io/e30e0126fd860292e04f0df34cd7a188084fe1d5/src/assets/linkedin.svg'
            },
            {
                name: 'Medium',
                url: 'https://medium.com/@anweshcr7',
                img_src: 'https://raw.githubusercontent.com/AnweshCR7/anweshcr7.github.io/e3b8419288a4ec74a925e6217782482f54f2f38d/src/assets/medium.svg'
            }

        ]
    }