
export const dashInfo = {
    projects: [
        {
            title: "Airbnb Price Prediction",
            link: "https://github.com/JAGS0816/airbnb-prediction-chrome-extension/blob/main/airbnb-price-prediction.ipynb",
            hability: ["cb"],
            shortDesc: `Airbnb Price Prediction is a project aimed at predicting accommodation prices on Airbnb to identify whether a listing is offering a fair price or not.`,
            longDesc: `Airbnb Price Prediction project utilizes data analysis and machine learning techniques to explore various variables that may influence Airbnb accommodation prices, such as location, size, amenities, and the time of year. It aims to provide users with insights into the fairness of the prices listed on Airbnb.`,
            skills: [
                "Data Analysis with Python: Utilizing Python for efficient data analysis.",
                "Machine Learning: Implementing machine learning algorithms for predictive modeling.",
                "Data Cleaning: Data cleaning using Python Pandas",
                "Feature Selection: Applying techniques of multicolinearity detection and feature engineering",
                "Model Evaluation: Model Evaluation using relevant metrics",
            ],
            images: ["/airbnbextension.png", "/airbnbextension2.png"]
        },
        {
            title: "Life Coincidences",
            link: "https://www.lifecoincidences.com/",
            hability: ["cd", "cb"],
            shortDesc: `LifeCoincidences is a WebApp that allows you to visualize space coincidences all over the time based on your google 
            map records.`,
            longDesc: `LifeCoincidences it's an innovative web platform that enables users to compare and analyze their Google location 
            histories with others, providing a visual and personalized experience of their matches on an interactive 3D map. 
            The application offers a unique combination of features, from secure token purchases to detailed visualization of 
            geospatial data.`,
            skills: [
                "Data Processing with Pandas: Efficient analysis of Google location history using Pandas library in Python.",
                "AWS S3 Storage and Lambda Processing: Secure storage in Amazon S3 and efficient processing using AWS Lambda.",
                "Serverless Architecture: Implementation of a serverless architecture with AWS Lambda for scalability.",
                "FullStack Development with Next.js: FullStack development using Next.js, incorporating React and Node.js.",
                "Mapbox Integration: Integration of Mapbox for advanced 3D data visualization.",
                "Secure Transactions with Stripe: Implementation of secure payments through Stripe.",
            ],
            images: ["/lifecoincidences.png", "/lifecoincidences2.png"]
        },
        {
            title: "Personal Portfolio",
            link: "https://jagsportfolio.vercel.app/",
            hability: ["cd"],
            shortDesc: `This is my portfolio, currently it is only frontend. But it is built on Next.js so I can add my projects and deployed 
            models directly.`,
            longDesc: `This personal portfolio showcases my skills and projects with a modern and responsive design. Built using Next.js, it 
            offers a sleek user experience with features like a dark/light theme toggle. Whether viewed on desktop or mobile devices, the 
            portfolio ensures an optimal browsing experience.`,
            skills: [
                "Frontend Development",
                "Next.js",
                "Modern Design",
                "Responsive Design",
                "Theme Toggle"
            ],
            images: ["/portfolio.png"]
        },     
        {
            title: "Web Scraper for Real Estate Agent with AWS Lambda and Cron Jobs",
            hability: ["af"],
            shortDesc: "Development of a web scraper tool designed to extract real estate data from various websites. The scraper is configured to run periodically every night using AWS Lambda and cron jobs.",
            longDesc: "This project utilizes BeautifulSoup for web scraping to extract real estate listings from multiple websites. The extracted data is then stored in a SQL database for further analysis and retrieval. Additionally, the data can be accessed and manipulated using Excel through an ODBC connection.",
            skills: [
                "Python",
                "Web Scraping",
                "AWS Lambda",
                "Cron Jobs",
                "BeautifulSoup",
                "SQL",
                "Data Extraction",
                "Data Storage",
                "Data Manipulation",
            ],
            images: ["/scraperrealstate.png", "/scraperrealstate2.png"]
        },
        {
            title: "CycleGAN for Monet-Style Painting Generation using Keras",
            link: "https://github.com/JAGS0816/CycleGAN-Monet-Generator", 
            hability: ["cb"],
            shortDesc: `Implementation of a Cycle Generative Adversarial Network (CycleGAN) using Keras to generate images with the stylistic 
            characteristics of paintings by Claude Monet.`,
            longDesc: `This project involved data preprocessing, and model training to learn the mapping between input images and 
            Monet-style paintings. It also included fine-tuning the model architecture, optimizing hyperparameters, and evaluating the generated 
            images for authenticity and fidelity to Monet's style.`,
            skills: [
                "Python",
                "Deep Learning",
                "Generative Adversarial Networks (GANs)",
                "Convolutional Neural Networks (CNN)",
                "Image Processing",
                "Data Preprocessing",
                "Model Training and Optimization",
                "TensorFlow",
                "Keras",
            ],
            images: ["/cycleganmonet.png", "/cycleganmonet2.png"]
        },
        {
            title: "Tweet Classification for Disaster Detection using RNN (Recurrent Neural Networks)",
            link: "https://github.com/JAGS0816/NLP-with-Disaster-Tweets", 
            hability: ["cb"],
            shortDesc: `Development of a Recurrent Neural Network (RNN) model using Keras to classify tweets and predict whether they are 
            discussing a real disaster or a false alarm.`,
            longDesc: `This project encompassed preprocessing the tweet data utilizing a variety of Natural Language Processing (NLP) techniques, 
            including stopword removal, lemmatization, tokenization, among others. It also involved defining the model architecture, conducting 
             testing, and fine-tuning hyperparameters. The culmination of the project was the creation of a comprehensive technical report 
            summarizing the methodology, and architecture.`,
            skills: [
                "Python",
                "Deep Learning",
                "Natural Language Processing (NLP)",
                "Recurrent Neural Networks (RNN)",
                "Text Classification",
                "Data Preprocessing",
                "Model Evaluation and Validation",
                "TensorFlow",
                "Keras",
            ],
            images: ["/rnntweets.png", "/rnntweets2.png"]
        },   
        {
            title: "Automated Greenhouse",
            link: "https://github.com/JAGS0816/CAM-GREENHOUSE-CONTROL-AUTOMATION",
            hability: ["sg", "cb"],
            shortDesc: `In this project, an automated control system for greenhouse irrigation lines was developed, incorporating various 
            functionalities such as MQTT, UART, interactive dashboards, artificial intelligence for plant disease detection, soil sensing, 
            water consumption monitoring, and actuator control.`,
            longDesc: `This project was developed for the CAM 18 school in Chihuahua, Chihuahua. My participation in this project included 
            collaboration on the PCB design for the hardware implementation, programming and firmware development for the ESP32 microcontroller,
             design and training of a Convolutional Neural Network (CNN) for disease detection in tomato plants, implementation of an end-to-end 
             IoT system, incorporating FreeRTOS and MQTT for communication, collaboration on an interactive dashboard using Node-RED for real-time
              monitoring, and configuration and adaptation of the project to specific environmental conditions.`,
            skills: [
                "Collaboration on PCB design for hardware implementation",
                "Programming and firmware development for ESP32 microcontroller",
                "Design and training of Convolutional Neural Network (CNN) for tomato plant disease detection",
                "Implementation of end-to-end IoT system incorporating FreeRTOS and MQTT for communication",
                "Collaboration on interactive dashboard using Node-RED for real-time monitoring",
                "Configuration and adaptation of project to specific environmental conditions"
            ],
            images: ["/greenhouse.jpg", "/greenhouse2.jpg"]
        },
        {
            title: "Histopathologic Cancer Detection using CNN (Convolutional Neural Networks)",
            link: "https://github.com/JAGS0816/CNN-Histopathologic-Cancer-Detection",
            hability: ["cb"],
            shortDesc: "I developed a Convolutional Neural Network (CNN) for metastasis identification in patients through histopathological images. I performed the following tasks:",
            longDesc: "Data preprocessing, Designing the neural network architecture, Training the Neural Network, Technical report development. Tools such as Keras, sklearn, pandas, numpy, etc., were utilized.",
            skills: [
                "Python",
                "Convolutional Neural Networks (CNN)",
                "Data Science",
                "Deep Learning",
                "Jupyter"
            ],
            images: ["/cnnhcd2.png", "/cnnhcd.png"]
        },
        {
            title: "Design, Manufacture and Programming of Rehabilitation Machine",
            link: "https://github.com/JAGS0816/The-Box-Rehabilitation-Machine",
            hability: ["sg"],
            shortDesc: "Led the design, manufacturing, and programming of a rehabilitation machine, incorporating an electronic system for set counting and exercise execution timing.",
            longDesc: "Programming a PIC18 microcontroller using MPLAB X IDE to acquire, process, and execute various actions based on the data. Conducting the mechanical design of the machine and overseeing fabrication using wood and 3D printing techniques using software such as SolidWorks, Cura Slicer. Designing and simulating the electronic circuit on Proteus for seamless integration.",
            skills: [
                "C Programming",
                "3D CAD",
                "Manufacturing",
                "Microchip PIC",
                "Microcontrollers",
                "Embedded Systems",
                "Electronics",
                "Mechatronic Engineering",
                "SolidWorks"
            ],
            images: ["/thebox3.jpg", "/thebox2.jpg", "/thebox.jpg"]
        },
        {
            title: "Web Scraping of Web Site 'Inmuebles24'",
            hability: ["af"],
            shortDesc: "Utilized Web Scraping techniques, specifically through the 'inmuebles24' site, to extract and clean contact information from 5000 real estate agents. Collaborated with a real estate agent and employed libraries such as 'Selenium', 'BeautifulSoup', 'pandas', etc.",
            longDesc: "My responsibilities in this project included designing the architecture of the Scraper, cleaning the acquired data, and delivering the data in the desired format.",
            skills: [
                "Python",
                "Data Cleaning",
                "Web Scraping",
                "Automation",
                "HTML",
                "BeautifulSoup",
                "Selenium"
            ],
            images: ["/inmueblescontact.png", "/inmueblescontact2.png"]
        },
        {
            title: "Design of an Innovative Device or Furniture or Tool for the Elderly",
            link: "https://drive.google.com/file/d/1iwK9yj164xle44Hp02jlc2jBpVIP62no/view?usp=sharing",
            hability: ["sg", "cb"],
            shortDesc: "Design and statistical validation of an innovative cane to help older adults to perform various activities. Measuring different aspects of the prototype such as strength, resistance on different designs to perform factorial analysis and choose the best prototype.",
            longDesc: "My duties on this project included mechanical design of the prototypes using SolidWorks, construction of the 16 prototypes made of cardboard, and statistical testing using Minitab.",
            skills: [
                "3D CAD",
                "Minitab",
                "Prototyping",
                "Design of Experiments (DOE)",
                "Statistical Validation",
                "Mechanical Design"
            ],
            images: ["/elderlyfurniture.png", "/elderlyfurniture2.png"]
        },
        {
            title: "Airbnb Price Prediction to Determine Rent Price of Apartments in Mexico City",
            link: "https://drive.google.com/file/d/1zelAUzac4k50o9IaB9mO20mbipiTNQcb/view?usp=sharing",
            hability: ["cb"],
            shortDesc: "Develop a data analysis to determine the rental price of a room or apartment in Mexico City. Independently and self-sufficiently identify relevant patterns and interactions from the information provided by the Airbnb technology platform.",
            longDesc: "My responsibilities on this project included data cleaning and exploratory analysis using Python and pandas to identify patterns and interactions, implementation of Linear Regression using Minitab to model rental price determinants, and compilation of a comprehensive report with key findings and conclusions.",
            skills: [
                "Python",
                "Linear Regression",
                "Gantt Charts",
                "Data Cleaning",
                "Minitab",
                "Project Planning"
            ],
            images: ["/airbnbprice.png", "/airbnbprice2.png"]
        },
        {
            title: "Web Scraping of Video Game Covers",
            hability: ["af"],
            shortDesc: "Developed an algorithm for downloading video game covers and uploading them to a video game store's web server via FTP, alongside updating the corresponding database to reflect these changes.",
            longDesc: "My key contributions in this project involved designing the Scraper based on the WebPage structure using 'Xpath,' 'Python,' and 'BeautifulSoup,' creating a user-friendly interface allowing users to review and accept/reject the covers, and implementing the upload of photos to the server and updating the SQL database to reflect the changes.",
            skills: [
                "Web Scraping",
                "Automation",
                "SQL",
                "Databases",
                "FTP Software"
            ],
            images: ["/videogamecovers.png", "/videogamecovers2.png"]
        }   
    ],
    habilities: [
        ["cb", "Convocatorias de Becas"],
        ["af", "Afore"],
        ["sg", "Seguros"],
        ["cd", "Créditos"],
        ["tj", "Tarjeta"]
    ],
    description: `Variedad de servicios financieros, diseñados para adaptarse a tus necesidades y metas. Desde préstamos personales y escolares hasta tarjetas de débito y crédito, así como seguros y créditos para iniciar un negocio. Descubre cómo podemos ser tu aliado en el camino hacia una gestión financiera más sólida y exitosa.`
}

export const resumeInfo = {
    experience: [
        {
            date: "2022 - PRESENT",
            title: "Web Scraping Engineer",
            company: "Freelance",
            description: `As a specialized freelancer in web scraping, I focus on the automated extraction and cleansing of data from the web. 
            I utilize advanced tools and techniques to efficiently gather and process data from various sources on the internet. My expertise 
            lies in transforming raw web data into structured and actionable data, providing valuable information for businesses and 
            organizations.`,
            technologies: ["SQL", "Python", "BeautifulSoup", "Selenium", "Scrapy", "Pandas", "Amazon Web Services (AWS)", "SQL databases"
            ]
        },
        {
            date: "2023",
            title: "Engineering Intern",
            company: "Figeac Aero",
            description: `At Figeac Aero Mexico, my work focused on counting and analyzing cycle times in manufacturing processes. 
            I identified deviations from established standards and proposed improvements to optimize efficiency and product quality. 
            Additionally, I integrated various data sources to obtain valuable information.`,
            technologies: ["Pandas", "statsmodels", "Excel", "Matplotlib", "Seaborn"]
        },        
    ],

    projects: [
        {
            date: "2024",
            title: "Web Scraper for Real Estate Agent with AWS Lambda and Cron Jobs",
            company: "Freelance",
            description: "This project utilizes BeautifulSoup for web scraping to extract real estate listings from multiple websites. The extracted data is then stored in a SQL database for further analysis and retrieval. Additionally, the data can be accessed and manipulated using Excel through an ODBC connection.",
            technologies: [
                "Python",
                "Web Scraping",
                "AWS Lambda",
                "Cron Jobs",
                "BeautifulSoup",
                "SQL",
                "Data Extraction",
                "Data Storage",
                "Data Manipulation",
            ],
        },
        {
            date: "2024",
            title: "Founder & FullStack Developer",
            company: "LifeCoincidences",
            description: `As the Founder and FullStack Developer at LifeCoincidences, I spearheaded the development of a cloud-based Web Application. 
            In my role as founder, I meticulously planned the architecture and data flow, ensuring seamless functionality and optimal performance. 
            As a developer, I brought this vision to life by implementing robust APIs on the cloud and crafting a user-friendly interface that prioritized 
            ease of use and efficiency.`,
            technologies: ["Next.js", "TypeScript", "Pandas", "AWS (Lambda, S3)", "Data Manipulation", "ETL", "Geospatial Visualization", "MapBox", "Stripe"]
        },
        {   
            date: "2023",
            title: "Automated Greenhouse",
            company: "SF: CAM 18",
            description: `This project was developed for the CAM 18 school in Chihuahua, Chihuahua. My participation in this project included 
            collaboration on the PCB design for the hardware implementation, programming and firmware development for the ESP32 microcontroller,
             design and training of a Convolutional Neural Network (CNN) for disease detection in tomato plants, implementation of an end-to-end 
             IoT system, incorporating FreeRTOS and MQTT for communication, collaboration on an interactive dashboard using Node-RED for real-time
              monitoring, and configuration and adaptation of the project to specific environmental conditions.`,
            technologies: [
                "C Programming",
                "Eagle PCB",
                "Python",
                "Keras",
                "Javascript",
                "MQTT",
                "UART",
                "FreeRTOS",
                "Convolutional Neural Networks"
            ],
        }
    ],

    education: [
        {
            date: "2021 - 2025",
            degree: "Bachelor of Engineering in Mechatronics",
            institution: "Tecnológico de Monterrey",
            description: "Líderes del Mañana 8th Generation Award to young students with outstanding cognitive, social and leadership skills."
        }
    ],
    coursesAndCert: [
        {
            name: "Introduction to Deep Learning",
            company: "Coursera",
            date: "2024",
            credentialID: "KHBV8U2DMRKF",
            skills: ["Deep Learning", "Convolutional Neural Networks", "Recurrent Neural Networks", "Tensorflow", "Keras", "Generative AI", "Cycle GAN"],
            link: "https://www.coursera.org/account/accomplishments/records/KHBV8U2DMRKF"
        },
        {
            name: "Big Data: Procesamiento y Análisis",
            company: "Coursera",
            date: "2023",
            credentialID: "8FYYVWFW77SP",
            skills: ["Unsupervised Learning", "Jupyter", "PySpark", "Supervised Learning", "Data Science", "Apache Spark", "Big Data"],
            link: "https://www.coursera.org/account/accomplishments/certificate/8FYYVWFW77SP"
        },
        {
            name: "Applied Machine Learning in Python",
            company: "Coursera",
            date: "2023",
            credentialID: "2AJG5F4CBHNT",
            skills: ["Jupyter", "Machine Learning Algorithms", "Pandas (Software)", "Data Science", "Scikit-learn", "Machine Learning"],
            link: "https://www.coursera.org/account/accomplishments/certificate/2AJG5F4CBHNT"
        },
        {
            name: "Building Web Applications in PHP",
            company: "Coursera",
            date: "2023",
            credentialID: "4QRNE47K9RH4",
            skills: ["PHP", "Web Development"],
            link: "https://www.coursera.org/account/accomplishments/certificate/4QRNE47K9RH4"
        },
        {
            name: "Introduction to Structured Query Language (SQL)",
            company: "Coursera",
            date: "2023",
            credentialID: "8HATJHBM7UGJ",
            skills: ["SQL"],
            link: "https://www.coursera.org/account/accomplishments/certificate/8HATJHBM7UGJ"
        },
        {
            name: "Tesla Stock Price Prediction using Facebook Prophet",
            company: "Coursera",
            date: "2022",
            credentialID: "AW6H97AGWD47",
            skills: ["Jupyter", "Automation", "Predictive Analysis", "Data Analysis"],
            link: "https://www.coursera.org/account/accomplishments/certificate/AW6H97AGWD47"
        },
        {
            name: "Positive Leadership and Personal Transformation",
            company: "Tecnológico de Monterrey",
            date: "2021",
            credentialID: "41108343",
            skills: ["Positive Change Leadership", "Psychological Capital", "Leadership"],
            link: "https://www.credential.net/f5001335-2bed-4510-894f-8f9ef46ddf20"
        }
    ]
}
