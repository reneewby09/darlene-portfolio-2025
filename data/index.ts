export const DATA = {
  home: {
    hero: {
      name: "Darlene Otadoy ☺︎",
      title: "A first year BS IT student at University of San Carlos",
      subtitle: "rolling through life like spring roll!",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Currently learning how to create modern digital experiences",
      overview: [
        {
          name: "Basic/Programming Fundamentals",
          level: 50,
          icon: "lucide:layout-dashboard",
          color: "primary",
        },
        {
          name: "Using VS Code",
          level: 45,
          icon: "lucide:code",
          color: "secondary",
        },
        {
          name: "Graphic Design",
          level: 80,
          icon: "lucide:smartphone",
          color: "success",
        },
        {
          name: "Basic HTML & CSS",
          level: 50,
          icon: "lucide:video",
          color: "warning",
        },
      ],
    },
    testimonials: {
      sectionTitle: "My Essays!",
      sectionDescription: "Academic writings and reflections",
      items: [
        {
          id: 1,
          name: "From Data to Knowledge in Learning Management Systems",
          role: "Academic Essay",
          content:
            "In everyday life, vast amounts of data are constantly being collected, often without us noticing. One clear and relatable situation where data is transformed into meaningful knowledge is within a university’s learning management system (LMS). This system tracks students’ activities such as long-frequency, quiz scores, assignment submissions, and time spent on learning materials. While these raw figures may seem insignificant on their own, they undergo a series of transformations that ultimately produce valuable knowledge for educators and institutions.The process begins with data, which consists of raw, unprocessed facts. In LMS, data appears as numerical values and timestamps: a student logged in at 8:15 a.m., scored 72% on a quiz, submitted an assignment two hours late, or spent fifteen minutes watching a lecture video. At this stage, data has no context or meaning. It simply exists as isolated facts stored in a database, unable to explain patterns or outcomes itself. The next stage is information, which is created when data is organized, processed, and given context. When the LMS aggregates quiz scores into averages, compares submission times across students, or generates weekly activity reports, raw data becomes information. For example, a report showing that the class average for a midterm quiz is 68%, or that most students accessed learning materials late at night, provides structure and relevance. Information answers basic questions such as what is happening and when it is happening, making the data easier to understand. The final and most valuable stage is knowledge, which emerges when information is analyzed, interpreted, and applied to decision-making. Educators may observe that students who frequently access practice quizzes tend to perform better in exams, or that late-night study habits correlate with lower quiz scores. These insights allow instructors to make informed decisions, such as providing additional review sessions, adjusting deadlines, or redesigning course materials to improve learning outcomes. At this point, knowledge goes beyond observation—it guides action and improvement. In summary, the transformation of data into knowledge is a structured and purposeful process. Raw data collected through digital systems becomes information when organized and contextualized, and it evolves into knowledge when analyzed and used to support decisions. This progression demonstrates how simple data, when properly handled, can lead to deeper understanding and meaningful change, particularly in educational environments where informed decisions can directly enhance student success.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 2,
          name: "The Importance of Artificial Intelligence and Cybersecurity",
          role: "Academic Essay",
          content:
            "Computer Science is a broad discipline that continues to influence modern society through constant innovation and technological advancement. Among its many areas, Artificial Intelligence and Cybersecurity stand out as two of the most important fields today because of their strong impact on daily life, businesses, and global systems. These areas play different but complementary roles in shaping a digital world that is both intelligent and secure. Artificial Intelligence focuses on developing systems that can perform tasks that normally require human intelligence, such as learning, reasoning, and decision making. Its importance lies in its ability to analyze large amounts of data efficiently and accurately. By identifying patterns and trends, AI helps organizations make better decisions in less time. One common application of AI can be seen in recommendation systems used by streaming platforms and online shopping websites, where user preferences are analyzed to suggest relevant content or products. In healthcare, AI assists medical professionals by interpreting medical images, predicting potential illnesses, and supporting early diagnosis. In education, AI-powered learning tools adapt lessons according to a student’s performance, allowing for more personalized and effective learning experiences. These applications highlight how Artificial Intelligence improves efficiency, accuracy, and user experience across multiple industries. Cybersecurity, on the other hand, focuses on protecting computer systems, networks, and data from digital threats. As more personal and professional activities are conducted online, the need for strong cybersecurity measures becomes increasingly important. Cyber threats such as data breaches, identity theft, and ransomware attacks can cause serious financial and emotional harm. Cybersecurity techniques like encryption, authentication, and network monitoring help protect sensitive information and ensure that systems remain reliable. In businesses, effective cybersecurity prevents unauthorized access to customer data and maintains trust with users. In government and public services, cybersecurity is essential for protecting critical infrastructure, including communication systems, transportation networks, and national databases. In conclusion, Artificial Intelligence and Cybersecurity are vital areas within Computer Science that address both innovation and protection. Artificial Intelligence enhances productivity and decision making through intelligent systems, while Cybersecurity ensures safety and trust in digital environments. Together, they contribute to a technological future that is both advanced and secure.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 3,
          name: "The Role of Computer Systems in Healthcare",
          role: "Academic Essay",
          content:
            "The healthcare industry relies heavily on computer systems to deliver efficient, accurate, and high quality medical services. As medical needs grow more complex and patient populations increase, computer systems play a critical role in improving patient care, supporting medical professionals, and streamlining healthcare operations. From hospitals and clinics to laboratories and research institutions, digital systems have become essential tools in modern healthcare. One of the most significant roles of computer systems in healthcare is the management of patient information. Electronic Health Records, or EHRs, allow healthcare providers to store, retrieve, and update patient data quickly and securely. These records include medical histories, laboratory results, prescriptions, and treatment plans. By replacing paper based records, computer systems reduce errors, improve coordination among medical teams, and ensure that patient information is accessible when needed. This leads to faster diagnoses and more informed clinical decisions. Computer systems also play a vital role in medical diagnosis and treatment. Advanced imaging systems such as CT scans, MRIs, and X rays depend on computer technology to produce detailed images of the human body. Doctors use these images to detect diseases, monitor conditions, and plan treatments. In addition, computer assisted diagnostic tools analyze test results and identify patterns that may indicate health risks, helping physicians provide more accurate and timely care. Another important area where computer systems contribute is hospital administration and operations. Scheduling software manages appointments, staff shifts, and operating room availability, ensuring that resources are used efficiently. Inventory management systems track medical supplies and equipment, reducing waste and preventing shortages. Billing and insurance processing systems handle complex financial transactions, making payments more accurate and reducing administrative burdens for both patients and healthcare providers. Furthermore, computer systems support healthcare research and public health initiatives. Large databases store medical research data, enabling scientists to analyze trends, test hypotheses, and develop new treatments. Public health agencies use computer systems to monitor disease outbreaks, track vaccination programs, and plan preventive strategies. These systems help healthcare organizations respond quickly to health emergencies and improve overall community well being. In conclusion, computer systems are fundamental to the healthcare industry. They enhance patient care, improve diagnostic accuracy, support efficient management, and advance medical research. As technology continues to evolve, the role of computer systems in healthcare will only become more significant, contributing to better health outcomes and more reliable healthcare services.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 4,
          name: "Pseudocode and Flowchart for a Vending Machine Transaction",
          role: "Academic Essay",
          contentBefore:
            "Computer Science concepts are often easier to understand when applied to real life situations. One simple and familiar example is a vending machine transaction. Although it appears straightforward to users, a vending machine follows a clear logical process to accept money, process choices, and dispense products. This process can be represented using pseudocode and a flowchart, which are common tools for planning and understanding program logic before actual coding begins. A vending machine transaction starts when a user approaches the machine and selects an item. The system must then check the price of the selected item and wait for the user to insert money. If the amount inserted is insufficient, the machine prompts the user to add more money. Once enough money is received, the machine dispenses the item and returns any change if necessary. If the selected item is out of stock, the machine cancels the transaction and returns the inserted money. This sequence shows how decision making and repetition are used in real world systems. Pseudocode allows developers to describe this process in a structured but human readable way. It focuses on logic rather than syntax, making it easier to plan how the system should behave. Below is a simple pseudocode example for a vending machine transaction:",
          image: "https://i.imgur.com/rQU24vp.png",
          contentAfter: "A flowchart visually represents the vending machine process using symbols and arrows, allowing users and programmers to clearly see the sequence of actions and decisions involved.\n\nThe process begins when the system starts and displays the available items, after which the user selects a product. The machine then checks whether the selected item is available; if it is not, a message is displayed, any inserted money is returned, and the transaction ends. If the item is available, the user is prompted to insert money, and the system checks whether the amount is sufficient. If the money inserted is insufficient, the process loops back to allow the user to add more funds. Once sufficient payment is received, the machine dispenses the item and determines whether any change is required. If change is needed, it is returned to the user, followed by a thank-you message, and the transaction ends. Overall, a vending machine transaction is a practical example of how algorithms function in everyday life, and using flowcharts helps clarify system logic, making computer-based solutions easier to design, understand, and improve.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 5,
          name: "Converting Decimal Numbers to Binary and Hexadecimal",
          role: "Academic Essay",
          content:
            "Number systems are fundamental in Computer Science because computers process and store data using different representations. While humans commonly use the decimal system, computers rely heavily on binary and hexadecimal systems for efficient processing and readability. Understanding how to convert a decimal number into binary and hexadecimal helps learners grasp how data is represented at a low level. To demonstrate this process clearly, the decimal number 25 will be converted into both binary and hexadecimal step by step. The decimal system is base 10, meaning it uses ten digits from 0 to 9. In contrast, the binary system is base 2 and uses only two digits, 0 and 1. To convert a decimal number into binary, the repeated division by 2 method is commonly used. Starting with the decimal number 25, the number is divided by 2, and the remainder is recorded. The process continues by dividing the quotient by 2 until the quotient becomes zero. First, 25 divided by 2 equals 12 with a remainder of 1. Next, 12 divided by 2 equals 6 with a remainder of 0. Then, 6 divided by 2 equals 3 with a remainder of 0. After that, 3 divided by 2 equals 1 with a remainder of 1. Finally, 1 divided by 2 equals 0 with a remainder of 1. The binary representation is obtained by reading the remainders from bottom to top, resulting in the binary number 11001. Hexadecimal, on the other hand, is a base 16 number system that uses digits 0 to 9 and letters A to F, where A represents 10 and F represents 15. Converting a decimal number into hexadecimal also uses repeated division, but this time by 16. When converting 25 into hexadecimal, 25 is divided by 16, giving a quotient of 1 and a remainder of 9. Since the quotient is already less than 16, the process stops. The hexadecimal number is formed by writing the quotient followed by the remainder, resulting in 19 in hexadecimal. Another way to understand this conversion is by grouping binary digits. The binary number 11001 can be grouped into four bit sections from right to left as 0001 and 1001. These groups correspond to hexadecimal values 1 and 9, which again confirms that the hexadecimal form of 25 is 19. In conclusion, converting decimal numbers into binary and hexadecimal involves systematic steps that reveal how computers interpret numerical values. By dividing by the base of the target number system and analyzing remainders, decimal numbers like 25 can be accurately represented in binary as 11001 and in hexadecimal as 19. This understanding is essential for students studying Computer Science and Information Technology.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 6,
          name: "General-Purpose vs Specific-Purpose Software",
          role: "Academic Essay",
          content:
            "Software applications are designed to help users perform tasks efficiently, but not all software serves the same purpose. In Computer Science and Information Technology, software is commonly classified into general purpose software and specific purpose software. These two categories differ mainly in their features, flexibility, and intended use cases. Understanding their differences helps users and organizations choose the most appropriate tools for their needs. General purpose software refers to applications designed to perform a wide variety of tasks and can be used in many different contexts. A common example is Microsoft Word, which is primarily used for creating and editing documents. Its features include text formatting, spell checking, templates, image insertion, and collaboration tools. These features make it suitable for tasks such as writing essays, preparing reports, creating letters, and even designing simple flyers. Because general purpose software is flexible, it can be adapted to different users such as students, teachers, office workers, and professionals from various industries. This versatility is its greatest strength, as a single application can support many tasks without requiring specialized training. In contrast, specific purpose software is designed to perform a particular task or set of closely related tasks. Payroll software is a clear example of this category. Its features are tailored specifically to managing employee salaries, calculating taxes, tracking attendance, and generating pay slips. Unlike general purpose software, payroll systems often include built-in compliance with labor laws and tax regulations, ensuring accuracy and legal consistency. These applications may also integrate with accounting systems and banking platforms. Because of their specialized nature, specific purpose software is usually used by trained personnel such as accountants or human resource staff. While it lacks flexibility, it excels in efficiency and precision within its intended function. When comparing their use cases, general purpose software is ideal for environments where tasks are varied and change frequently. For example, in schools and offices, Microsoft Word is used daily for different types of documents. Specific purpose software, on the other hand, is best suited for organizations with repetitive and well defined processes. Payroll software is typically used on a regular schedule and follows strict procedures, making automation essential. In conclusion, general purpose software and specific purpose software serve different but equally important roles. General purpose software offers flexibility and broad functionality, while specific purpose software provides accuracy and efficiency for specialized tasks. Choosing between them depends on the user's needs, the complexity of the task, and the level of specialization required.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 7,
          name: "IPOS Devices and Their Functions",
          role: "Academic Essay",
          contentBefore:
            "In computer systems, the IPOS model—Input, Processing, Output, and Storage—represents the fundamental components that allow a computer to function effectively. Each component plays a unique role in handling data, transforming it into meaningful information, and storing it for future use. Understanding IPOS devices is essential for students and professionals in Computer Science and Information Technology, as it provides a clear view of how computers manage information. Input Devices are the tools that allow users to enter data and instructions into a computer system. Common input devices include keyboards, which let users type text and commands; mice, which help navigate and select items on a screen; scanners, which convert physical documents into digital form; and microphones, which capture audio signals. These devices serve as the bridge between the user and the computer, enabling the system to receive raw data that will later be processed. Processing is the component responsible for transforming raw data into meaningful information. The central processing unit (CPU) is the heart of this stage. It interprets and executes instructions from software applications and performs calculations and logical operations. The CPU often works with memory components such as RAM to temporarily store data needed during processing. This stage ensures that input data is analyzed, computed, or manipulated correctly before it is sent to output or storage. Output Devices allow the computer to communicate the results of processing to the user in a form that is understandable. Examples of output devices include monitors, which display visual information such as text, images, and videos; printers, which produce physical copies of digital documents; and speakers, which deliver audio output. Output devices make it possible for users to receive feedback and make decisions based on processed information. Storage Devices are used to save data and information for future access. They can be temporary or permanent. Random Access Memory (RAM) serves as temporary storage that the CPU uses while performing tasks. Permanent storage devices include hard drives, solid-state drives, and external storage media like USB flash drives. Storage devices ensure that data is preserved even when the computer is powered off, allowing users to retrieve and reuse information whenever necessary. Below is a simple labeled diagram representing IPOS devices:",
          image: "https://i.imgur.com/Q9tW9D8.png",
          contentAfter: "In conclusion, the IPOS model demonstrates how computers handle data from the moment it is entered until it is stored or presented as output. Input devices provide the data, processing devices analyze it, output devices communicate the results, and storage devices save the information for future use. Understanding these components is crucial for anyone learning about computer systems, as it forms the foundation for more advanced studies in computing.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 8,
          name: "Utility Software Applications",
          role: "Academic Essay",
          content:
            "Utility applications are specialized software programs designed to help users maintain, optimize, and protect their computer systems. Unlike general purpose software, which focuses on productivity tasks like writing or designing, utility software focuses on system performance, security, and data management. Understanding different utility applications and their benefits is essential for anyone seeking to keep their computer systems running efficiently and securely. This essay explores three common utility applications: antivirus software, backup software, and disk cleanup tools. Antivirus Software is one of the most widely used utility applications. Its primary function is to detect, prevent, and remove malicious programs such as viruses, spyware, and ransomware. Antivirus software continuously scans files, applications, and system activity to identify potential threats and neutralize them before they can cause damage. The benefits of antivirus software are significant. It protects sensitive data from theft or corruption, ensures system stability by preventing malware-related crashes, and provides users with peace of mind knowing their devices are secure. In today's world, where cyber threats are increasingly sophisticated, antivirus software is a critical component of both personal and organizational digital security. Backup Software is another essential utility application that safeguards data by creating copies that can be restored in case of loss or damage. Backup software can store data on external drives, cloud storage, or network servers. Its primary benefit is data recovery. If a computer suffers a hardware failure, accidental deletion, or ransomware attack, backup software allows users to restore their files to their previous state. This ensures business continuity for organizations and prevents personal data loss for individual users. Regular backups also reduce downtime and the financial or emotional cost of lost information, making this utility indispensable in a data-driven world. Disk Cleanup Tools help optimize system performance by removing unnecessary files that accumulate over time, such as temporary files, cache, log files, and old system updates. These tools free up storage space, improve system speed, and enhance the overall efficiency of the computer. By periodically running disk cleanup utilities, users can prevent slowdowns and maintain smooth operation of their devices. Additionally, these tools reduce the risk of system errors caused by fragmented or cluttered storage, extending the lifespan of both software and hardware. In conclusion, utility applications play a vital role in maintaining and enhancing computer systems. Antivirus software protects against security threats, backup software ensures data safety and recovery, and disk cleanup tools optimize storage and performance. By incorporating these utilities into regular computer maintenance routines, users can enjoy more secure, efficient, and reliable systems, demonstrating the critical value of utility applications in modern computing.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 9,
          name: "Student Information Database Organization",
          role: "Academic Essay",
          content:
            "In educational institutions, managing student information efficiently is critical for smooth operations, academic tracking, and decision making. A student information database serves as a centralized system that stores, organizes, and retrieves data about students in a structured manner. By using databases, schools and universities can maintain accurate records, simplify reporting, and enhance communication between administration, teachers, and students. A student information database is typically organized in a tabular structure, where each row represents an individual student and each column corresponds to a specific data field. This organization allows easy sorting, filtering, and updating of information. Advanced database management systems may also use relationships between tables to connect related information, such as linking students to their enrolled courses, grades, or attendance records. Organizing data in this manner ensures consistency, reduces redundancy, and makes it easier to generate reports or analyze trends. The data fields in a student information database vary depending on the institution's requirements, but generally include essential personal, academic, and administrative information. Personal data fields typically include the student's full name, date of birth, gender, address, contact number, and email address. These fields help identify the student and facilitate communication. Academic data fields are designed to capture educational information. These may include student identification number, enrollment date, course or program, year or grade level, class schedule, and academic performance such as grades or GPA. This information allows educators and administrators to track student progress, plan curriculum requirements, and identify areas needing support. Administrative data fields include information related to attendance, disciplinary records, fees and payment status, and scholarship or financial aid details. Such fields help streamline administrative tasks, manage resources efficiently, and ensure compliance with institutional policies. Additional fields may include emergency contact details, medical information, and extracurricular activities, which provide a more complete overview of the student. Beyond individual records, a well-organized database can include indexes and search functions to quickly retrieve student information based on specific criteria, such as name, student ID, or program of study. Reports can also be generated for teachers, administrators, or government agencies to monitor enrollment trends, academic performance, or resource allocation. In conclusion, a student information database is an organized and systematic way to store and manage a wide range of student data. By including personal, academic, and administrative data fields and structuring them in tables or related entities, educational institutions can ensure accurate record keeping, improve efficiency, and enhance decision making. Such a database becomes an essential tool in supporting the educational process and the overall management of student affairs.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 10,
          name: "Network Topologies and Their Advantages",
          role: "Academic Essay",
          content:
            "In computer networking, a network topology refers to the arrangement of devices and connections in a network. The choice of topology affects how data is transmitted, how devices communicate, and how easy it is to manage or expand the network. Different topologies offer unique benefits and are suited for different environments. Among the most common network topologies are star, mesh, and bus topologies. The star topology is one of the most widely used network configurations. In a star network, all devices are connected to a central device, usually a switch or hub. Each device communicates through this central node, which manages data flow. One major advantage of the star topology is that it is highly reliable. If one peripheral device fails, it does not affect the rest of the network. Additionally, it is easy to add or remove devices without disrupting network operations. The central hub also simplifies troubleshooting because network problems can often be traced directly to the affected node or connection. However, the main limitation is that if the central hub fails, the entire network becomes inoperative. In a mesh topology, every device is connected to every other device in the network, creating multiple redundant paths for data transmission. This topology offers high reliability and fault tolerance. If one connection or device fails, data can be rerouted through alternative paths, ensuring continuous communication. Mesh networks are particularly advantageous in environments where uninterrupted connectivity is crucial, such as in military applications or data centers. The main challenge of mesh networks is their complexity and cost, as the number of connections grows exponentially with each additional device. The bus topology is a simpler design where all devices share a single communication line or backbone. Each device is connected to this backbone and communicates by sending signals along it. Bus topologies are relatively easy to implement and cost-effective for small networks. They require less cabling compared to star or mesh topologies, which reduces initial setup costs. However, bus networks can experience data collisions, and if the main backbone fails, the entire network is disrupted. Troubleshooting can also be more difficult compared to other topologies. Each network topology has its own advantages depending on the needs of the organization. Star topologies are ideal for small to medium-sized networks requiring easy management. Mesh topologies are suited for critical systems that demand high reliability. Bus topologies work best in small networks where cost and simplicity are primary concerns. In conclusion, understanding different network topologies and their advantages is essential for designing efficient and reliable networks. The choice of topology influences network performance, scalability, and fault tolerance, making it a key consideration in networking and information technology planning.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 11,
          name: "Ethics, Security, and Privacy in IT",
          role: "Academic Essay",
          content:
            "In the rapidly evolving field of Information Technology, data privacy has become one of the most pressing ethical concerns. With vast amounts of personal, financial, and medical information stored and transmitted digitally, ensuring that sensitive data remains protected is both a moral and legal responsibility for IT professionals. Data breaches, unauthorized access, and misuse of personal information can have serious consequences for individuals and organizations, making it a critical area of focus for ethical standards in IT. Data privacy involves protecting the personal information of individuals from being disclosed without consent or used inappropriately. Examples of ethical issues include companies collecting excessive personal data without transparency, hackers stealing customer information, or employees accessing confidential records for unauthorized purposes. Such practices not only violate the trust of users but can also lead to financial losses, reputational damage, and legal repercussions. The ethical question arises: how can IT professionals balance the need for data collection with the obligation to respect users' privacy? The IT Code of Ethics, as defined by professional organizations such as the Association for Computing Machinery (ACM) and the Institute of Electrical and Electronics Engineers (IEEE), provides clear guidance on addressing this issue. The code emphasizes principles such as honesty, fairness, and respect for privacy. It instructs IT professionals to collect, store, and use data responsibly, ensuring that individuals are aware of how their information is handled. IT practitioners are encouraged to obtain informed consent, implement appropriate security measures, and avoid exploiting sensitive data for personal or organizational gain. Furthermore, the code of ethics promotes accountability and transparency. For instance, IT professionals are expected to report data breaches promptly and work to mitigate potential harm. By following these ethical guidelines, professionals help maintain public trust in digital systems and uphold the integrity of the IT profession. Organizations that adopt these principles not only protect user data but also comply with data protection laws such as the General Data Protection Regulation (GDPR) and the Data Privacy Act, which reinforce the moral imperatives outlined in the code. In conclusion, data privacy represents a significant ethical challenge in the field of Information Technology. Unauthorized access, misuse, or disclosure of personal information can have serious consequences, making adherence to ethical standards crucial. The IT Code of Ethics provides a framework for addressing these challenges, guiding professionals to act responsibly, protect user data, and maintain public trust. By following these principles, IT practitioners ensure that technology serves society ethically, safely, and respectfully.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 12,
          name: "Basic HTML Structure",
          role: "Academic Essay",
          contentBefore:
            "Building a personal webpage is an excellent way to showcase your skills, interests, and achievements online. Using HTML, the fundamental language of the web, you can structure content in a clear and organized manner. A simple personal webpage typically includes headings, paragraphs, and lists, which help present information in a readable and visually appealing way. At the core of any HTML page is the HTML document structure, which consists of a <html> element containing a <head> and a <body>. The <head> includes metadata such as the webpage title, while the <body> contains all visible content. For a personal webpage, headings (<h1> through <h6>) provide structure and hierarchy. The main heading <h1> often contains your name or the title of the page. Subheadings such as <h2> or <h3> can introduce sections like 'About Me,' 'Skills,' or 'Hobbies.' Paragraphs are created using the <p> tag and are ideal for writing short descriptions about yourself, your experiences, or your goals. For example, a paragraph under 'About Me' can summarize your background and interests in a few sentences. Paragraphs make the content readable and help organize information logically. Lists are useful for presenting items such as skills, hobbies, or accomplishments. HTML supports both ordered lists (<ol>) and unordered lists (<ul>), with list items marked by <li>. An unordered list can highlight a set of skills, while an ordered list can show achievements or steps in a process. Lists enhance readability by breaking up long blocks of text and allowing visitors to scan information quickly. Here is a simple HTML example of a personal webpage structure:",
          image: "https://i.imgur.com/mJYBLaW.png",
          contentAfter: "This HTML structure includes a main heading for the name, sections for 'About Me,' 'Skills,' and 'Hobbies,' and lists to organize skills and hobbies clearly. Such a structure is not only simple but also forms a solid foundation for adding styles with CSS or interactivity with JavaScript in the future. In conclusion, creating a personal webpage with headings, paragraphs, and lists is an effective way to organize information and present yourself online. HTML provides a simple yet powerful way to structure content, making your webpage readable, engaging, and easy to expand as your skills grow.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 13,
          name: "CSS Styling for Webpages",
          role: "Academic Essay",
          contentBefore:
            "Cascading Style Sheets (CSS) play a crucial role in web development by allowing designers to control the appearance and layout of web pages. While HTML provides the structure of a page, CSS determines its visual presentation, including colors, fonts, spacing, and layout. Writing a CSS style sheet can make a simple webpage look modern, organized, and visually appealing. This essay demonstrates a CSS style sheet with specific colors, font sizes, and layouts that can be applied to a personal webpage. To begin, CSS allows developers to define global styles for the entire webpage. For example, the <body> element can be styled with a background color, font family, and default text color. Using a clean and readable font like Arial or Verdana enhances readability, while a soft background color can make the page visually comfortable. Headings are another important element to style, as they provide hierarchy and emphasis. CSS can be used to assign different font sizes and colors to various heading levels. For example, <h1> can be styled with a larger font size and a bold, prominent color to draw attention to the main page title, while <h2> and <h3> can have slightly smaller fonts and complementary colors to differentiate sections and subsections. Paragraphs and lists can also be styled to improve readability. Adjusting the font size, line height, and text color ensures that content is legible and aesthetically consistent. Additionally, adding spacing through margins and padding creates separation between sections, preventing a cluttered appearance. Lists, whether ordered or unordered, can have custom bullet styles or indentation for better organization. CSS also enables the creation of layouts to arrange page elements effectively. Using a container class, designers can center content on the page and control its width. Flexbox or grid layouts can further help position multiple elements, such as sidebars, main content areas, or navigation menus, creating a professional and balanced appearance. Here is an example CSS style sheet for a personal webpage:",
          image: "https://i.imgur.com/n4VBxpt.png",
          contentAfter: "This style sheet applies a neutral background, readable font sizes, and clear heading hierarchies while creating a centered content container with padding and subtle shadow for a clean layout. The CSS rules enhance readability, organization, and aesthetic appeal without overwhelming the user. In conclusion, a well-crafted CSS style sheet can transform a basic webpage into an engaging, visually appealing site. By carefully selecting colors, font sizes, and layouts, designers can improve readability, structure content effectively, and create a professional look. CSS empowers developers to separate content from design, providing flexibility to maintain and update webpages efficiently.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
        {
          id: 14,
          name: "Generative AI and Its Future Impact",
          role: "Academic Essay",
          content:
            "Generative Artificial Intelligence (AI) is an emerging technology capable of creating content, analyzing data, and simulating human-like reasoning. In fields such as healthcare, its potential impact is transformative, offering opportunities to improve patient care, optimize clinical workflows, and accelerate medical research. However, alongside these benefits, Generative AI also raises significant ethical concerns that must be addressed to ensure responsible use. In healthcare, Generative AI can enhance diagnostic accuracy and treatment planning. By analyzing vast amounts of medical data, AI systems can generate insights that help doctors identify diseases earlier and recommend personalized treatment options. For example, AI models can interpret medical images such as X-rays, MRIs, or CT scans, highlighting potential anomalies that may be missed by human eyes. Additionally, AI can assist in predicting disease progression, enabling proactive interventions and improving patient outcomes. Beyond diagnostics, Generative AI can streamline administrative tasks, such as drafting medical reports, generating patient summaries, or automating appointment scheduling, allowing healthcare professionals to focus more on direct patient care. The technology also accelerates research and drug development. Generative AI can simulate molecular structures, propose potential drug compounds, and predict their efficacy, significantly reducing the time and cost associated with traditional research methods. This capability holds promise for faster responses to emerging health threats, such as pandemics, and could revolutionize personalized medicine by tailoring treatments to individual genetic profiles. Despite these benefits, ethical concerns surrounding Generative AI in healthcare are substantial. Data privacy is a major issue because AI systems require access to large datasets containing sensitive patient information. Improper handling of this data can lead to breaches of confidentiality or misuse. Bias and fairness are also critical concerns; if AI models are trained on incomplete or unrepresentative data, they may produce biased recommendations, disproportionately affecting certain patient groups. Additionally, the accountability and transparency of AI-generated decisions are challenging. Patients and practitioners may find it difficult to understand or trust the reasoning behind AI recommendations, raising questions about responsibility when errors occur. To address these concerns, healthcare organizations must implement strong ethical guidelines and regulatory frameworks. Transparency in data collection, robust security measures, and continuous monitoring for bias are essential. Furthermore, Generative AI should complement, rather than replace, human judgment, ensuring that healthcare professionals remain central in decision-making. In conclusion, Generative AI has the potential to revolutionize healthcare by improving diagnostics, accelerating research, and optimizing administrative processes. However, its adoption must be carefully managed to address ethical challenges such as privacy, bias, and accountability. By balancing innovation with ethical responsibility, healthcare systems can leverage AI's capabilities while safeguarding patient trust and well-being.",
          avatar: "https://i.imgur.com/89NHGcl.jpeg",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Darlene Renee M. Otadoy",
      title: "A first year BS IT student at University of San Carlos",
      image:
        "https://i.imgur.com/89NHGcl.jpeg",
      description: [
        "I’m a first-year BSIT student currently exploring the world of web development and design. I’m still building my foundation, but I’m really passionate about understanding how the web works and how different technologies come together to create functional projects. Right now, I’m learning the basics of front-end development — from structuring content with HTML, to styling pages with CSS, and slowly diving into JavaScript to add simple interactive features. I enjoy experimenting with layouts, colors, and small UI elements as I improve. I also have experience from senior high school where we worked with robotics and basic Arduino programming, which helped me build confidence in logical thinking and problem-solving. Those early experiences made me even more interested in coding and technology. As I continue my studies in college, I'm expanding my skills in programming languages like Java, Python, and more. I’m excited to keep growing, practicing, and creating more projects as I work toward becoming a web developer someday.",
      ],
    },
    education: [
      {
        title: "La Consolacion College - Liloan, High School",
        date: "2019-2023",
        icon: "mdi:palette",
        description:
          "Learned the basics of HTML and web page structure, including tags, links, tables, images, and simple layouts. Also gained exposure to basic graphic design tasks such as creating posters and simple digital artworks.",
      },
      {
        title: "University of Cebu - Banilad, SHS",
        date: "2023 - 2025",
        icon: "mdi:school",
        description:
          "Learned the basics of programming and hands‑on robotics using Arduino. Gained experience writing simple code for sensors, LEDs, and small projects, as well as understanding how hardware and software work together.",
      },
      {
        title: "University of San Carlos - Talamban Campus, SAS College",
        date: "2025 - Present",
        icon: "mdi:school-outline",
        description:
          "Currently in my first year as a BSIT student, learning core programming skills including HTML, CSS, Java, and Python. Building a strong foundation in problem‑solving, logic, and software development concepts. I also have experience with Arduino and basic robotics coding from senior high school, which helped spark my interest in technology and hands-on digital projects.",
      },
    ],
    experience: [
      {
        title: "Production Team's Graphic Designer",
        date: "2023 - 2025",
        icon: "mdi:briefcase",
        description:
          "Served as the graphic designer for the school production team, creating posters, event materials, and social media visuals. Learned teamwork, design tools like Figma and Notion, and developed basic graphic design skills through practical projects.",
      },
      {
        title: "Video Editor for School Events",
        date: "2023 - 2025",
        icon: "mdi:monitor-dashboard",
        description:
          "Worked as a video editor for school projects and events, creating short films, event promos, and video presentations. Learned video editing techniques using tools like Adobe Premiere and Canva, while improving storytelling and teamwork skills.",
      },
      {
        title: "Arduino Robotics Project Competition",
        date: "2023 - 2024",
        icon: "mdi:monitor-dashboard",
        description:
          "Participated in an Arduino Robotics Project Competition, contributing to the design, assembly, and testing of a functional robotic system. Collaborated with teammates to plan the project, troubleshoot hardware and code issues, and demonstrate the robot’s capabilities. Gained hands-on experience with Arduino programming, basic electronics, and teamwork in a competitive school environment.",
      }
    ],
    technologies: {
      uiUx: {
        description:
          "I am learning to design smooth, user-centered interfaces and high-fidelity prototypes.",
        tools: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Notion", icon: "logos:notion-icon" },
        ],
      },
      graphicDesign: {
        description:
          "My graphic work includes logos, infographic, and posters using Adobe Suite.",
        tools: [
          { name: "Photoshop", icon: "logos:adobe-photoshop" },
          { name: "Illustrator", icon: "logos:adobe-illustrator" },
        ],
      },
      motionDesign: {
        description:
          "I animate basic UI flows and cinematic intros using After Effects and Blender.",
        tools: [
          { name: "After Effects", icon: "logos:adobe-after-effects" },
          { name: "Premiere Pro", icon: "logos:adobe-premiere" },
          { name: "Blender", icon: "logos:blender" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "PORTFOLIO PREVIEW",
    sectionDescription:
      "Portfolio content guide questions:",
    work: [
      {
        id: 1,
    title: "Data, Information, and Knowledge",
    description:
      "Data are raw facts and figures, such as numbers, names, or measurements. When data are processed and organized in a meaningful way, they become information, which can be used to understand a situation or make decisions. Knowledge is created when information is analyzed and applied to solve problems or guide actions. For example, a teacher collecting student test scores (data) can calculate averages and trends (information) and then use these insights to improve teaching methods (knowledge).",
    image: "https://i.imgur.com/PRuHlMb.jpeg",
    gallery: [
      "https://i.imgur.com/PRuHlMb.jpeg https://i.imgur.com/PRuHlMb.jpeg https://i.imgur.com/PRuHlMb.jpeg https://i.imgur.com/PRuHlMb.jpeg",
    ],
    category: "Fundamentals of Information and Computing",
    details: [
      "★ Data, Information, and Knowledge – Understand how raw data is processed into information and applied as knowledge.\n\n",
      "★ Concept of Number Systems – Learn binary, decimal, and hexadecimal systems and their importance in computing.\n\n",
      "★ Basic Concepts and Definitions of Data and Database – Explore structured data storage and the advantages of databases.\n\n",
    ],
    tech: [
      { name: "Database", icon: "mdi:database" },
      { name: "Analytics", icon: "mdi:chart-line" }
    ],
  },
  {
    id: 2,
    title: "Areas of the Computer Science Discipline",
    description:
      "Computer Science has several areas including Artificial Intelligence, Cybersecurity, Software Engineering, Networking, and Human-Computer Interaction. Each area contributes to technology by solving specific problems: AI enables machines to learn, cybersecurity protects data, software engineering creates applications, and networking allows systems to communicate. Each field requires unique skills, such as programming, critical thinking, and system analysis.",
    image: "https://i.imgur.com/u0YeATp.jpeg",
    gallery: [
      "https://i.imgur.com/u0YeATp.jpeg https://i.imgur.com/u0YeATp.jpeg https://i.imgur.com/u0YeATp.jpeg https://i.imgur.com/u0YeATp.jpeg",
    ],
    category: "Computer Science & Applications",
    details:[
      "★ Areas of the Computer Science Discipline – Overview of AI, Cybersecurity, Software Engineering, Networking, etc.\n\n",
      "★ Various Uses of Computer Systems in the Modern World - Applications across healthcare, finance, education, and businesses.\n\n",
      "★ Software and Application Concepts: General and Specific Purpose Software - Differences, uses, and examples of software types.\n\n",
      "★ Software Application Types: Utilities - Tools for system maintenance, security, and productivity.\n\n",
    ],
    tech: [
      { name: "AI", icon: "mdi:robot" },
      { name: "Security", icon: "mdi:shield-lock" },
      { name: "Networks", icon: "mdi:network" }
    ],
  },
  {
    id: 3,
    title: "Various Uses of Computer Systems in the Modern World",
    description:
      "Computer systems are widely used in healthcare for patient records, in finance for transactions, in education for online learning, and in businesses for data management. They have revolutionized daily life by automating repetitive tasks, enabling remote work, and improving communication. Emerging uses include artificial intelligence in smart devices, predictive analytics, and virtual reality applications.",
    image: "https://i.imgur.com/CNKAxdT.jpeg",
    gallery: [
      "https://i.imgur.com/CNKAxdT.jpeg https://i.imgur.com/CNKAxdT.jpeg https://i.imgur.com/CNKAxdT.jpeg https://i.imgur.com/CNKAxdT.jpeg",
    ],
    category: "Computer Science & Applications",
    details:[
      "★ Areas of the Computer Science Discipline – Overview of AI, Cybersecurity, Software Engineering, Networking, etc.\n\n",
      "★ Various Uses of Computer Systems in the Modern World - Applications across healthcare, finance, education, and businesses.\n\n",
      "★ Software and Application Concepts: General and Specific Purpose Software - Differences, uses, and examples of software types.\n\n",
      "★ Software Application Types: Utilities - Tools for system maintenance, security, and productivity.\n\n",
    ],
    tech: [
      { name: "Cloud", icon: "mdi:cloud" },
      { name: "Systems", icon: "mdi:server" }
    ],
  },
  {
    id: 4,
    title: "Algorithm, Pseudocode, and Flowcharting",
    description:
      "Algorithms are step-by-step procedures for solving problems efficiently. Pseudocode is a plain-language outline of an algorithm, while flowcharts use diagrams to show the flow of processes visually. Pseudocode is easier for programmers to understand logically, whereas flowcharts provide a clear visual representation for non-technical stakeholders. Both are essential in planning and documenting programs before coding.",
    image: "https://i.imgur.com/3JCovOh.jpeg",
    gallery: [
      "https://i.imgur.com/3JCovOh.jpeg https://i.imgur.com/3JCovOh.jpeg https://i.imgur.com/3JCovOh.jpeg https://i.imgur.com/3JCovOh.jpeg",
    ],
    category: "Programming and Development",
    details:[
      "★ Algorithm, Pseudocode, and Flowcharting - Planning and solving problems through algorithms, pseudocode, and flowcharts.\n\n",
      "★ HTML Programming - Structuring web content using HTML tags.\n\n",
      "★ CSS Programming - Styling web content for design, layout, and usability.\n\n",
    ],
    tech: [
      { name: "Algorithms", icon: "mdi:algorithm" },
      { name: "Logic", icon: "mdi:logic" }
    ],
  },
  {
    id: 5,
    title: "Concept of Number Systems",
    description:
      "Computers use different number systems, primarily binary (base 2), decimal (base 10), and hexadecimal (base 16). Binary represents information using 0s and 1s, which is essential for computer processing. Converting between these systems allows humans to interpret data efficiently. For example, the decimal number 25 can be represented as 11001 in binary and 19 in hexadecimal.",
    image: "https://i.imgur.com/UpzQU8h.png",
    gallery: [
      "https://i.imgur.com/UpzQU8h.png https://i.imgur.com/UpzQU8h.png https://i.imgur.com/UpzQU8h.png https://i.imgur.com/UpzQU8h.png",
    ],
    category: "Fundamentals of Information and Computing",
    details:[
      "★ Data, Information, and Knowledge – Understand how raw data is processed into information and applied as knowledge.\n\n",
      "★ Concept of Number Systems – Learn binary, decimal, and hexadecimal systems and their importance in computing.\n\n",
      "★ Basic Concepts and Definitions of Data and Database – Explore structured data storage and the advantages of databases.\n\n",
    ],
    tech: [
      { name: "Binary", icon: "mdi:binary" },
      { name: "Math", icon: "mdi:calculator" }
    ],
  },
  {
    id: 6,
    title: "Software and Application Concepts: General and Specific Purpose Software",
    description:
      "General-purpose software, like word processors and web browsers, can be used for multiple tasks by anyone. Specific-purpose software, such as payroll or accounting systems, is designed for specialized functions. General-purpose software focuses on flexibility, while specific-purpose software is optimized for efficiency in particular areas.",
    image: "https://i.imgur.com/m1HaMjH.jpeg",
    gallery: [
      "https://i.imgur.com/m1HaMjH.jpeg https://i.imgur.com/m1HaMjH.jpeg https://i.imgur.com/m1HaMjH.jpeg https://i.imgur.com/m1HaMjH.jpeg",
    ],
    category: "Computer Science & Applications",
    details:[
      "★ Areas of the Computer Science Discipline – Overview of AI, Cybersecurity, Software Engineering, Networking, etc.\n\n",
      "★ Various Uses of Computer Systems in the Modern World - Applications across healthcare, finance, education, and businesses.\n\n",
      "★ Software and Application Concepts: General and Specific Purpose Software - Differences, uses, and examples of software types.\n\n",
      "★ Software Application Types: Utilities - Tools for system maintenance, security, and productivity.\n\n",
    ],
    tech: [
      { name: "Software", icon: "mdi:application" },
      { name: "Engineering", icon: "mdi:cog" }
    ],
  },
  {
    id: 7,
    title: "Computer Hardware Concepts: IPOS Devices, Internal and External Parts",
    description:
      "The IPOS cycle—Input, Process, Output, and Storage—describes how computers work. Input devices (keyboard, mouse) capture data, the CPU processes it, output devices (monitor, printer) display results, and storage devices (hard drives, SSDs) save information. Internal components like the CPU, RAM, and motherboard work together to process data efficiently, while external parts allow users to interact with the system.",
    image: "https://i.imgur.com/kHjpcUR.jpeg",
    gallery: [
      "ttps://i.imgur.com/kHjpcUR.jpeg ttps://i.imgur.com/kHjpcUR.jpeg ttps://i.imgur.com/kHjpcUR.jpeg ttps://i.imgur.com/kHjpcUR.jpeg",
    ],
    category: "Hardware and Networking",
    details:[
      "★ Computer Hardware Concepts: IPOS Devices, Internal and External Parts - Input, processing, output, storage, and their components.\n\n",
      "★ Basic Concepts of Computer Networks: Topology, Scope, Types, and Tools - Network structures, types, and tools for communication.\n\n",
    ],
    tech: [
      { name: "Hardware", icon: "mdi:memory" },
      { name: "CPU", icon: "mdi:cpu-64-bit" }
    ],
  },
  {
    id: 8,
    title: "Software Application Types: Utilities",
    description:
      "Utility software helps maintain and optimize computer systems. Examples include antivirus software to protect against malware, backup tools to prevent data loss, file compression programs to save storage space, and productivity apps that improve workflow. Each utility serves a specific purpose in ensuring that computers run smoothly, securely, and efficiently.",
    image: "https://i.imgur.com/mOLQlqf.jpeg",
    gallery: [
      "https://i.imgur.com/mOLQlqf.jpeg https://i.imgur.com/mOLQlqf.jpeg https://i.imgur.com/mOLQlqf.jpeg https://i.imgur.com/mOLQlqf.jpeg",
    ],
    category: "Computer Science & Applications",
    details:[
      "★ Areas of the Computer Science Discipline – Overview of AI, Cybersecurity, Software Engineering, Networking, etc.\n\n",
      "★ Various Uses of Computer Systems in the Modern World - Applications across healthcare, finance, education, and businesses.\n\n",
      "★ Software and Application Concepts: General and Specific Purpose Software - Differences, uses, and examples of software types.\n\n",
      "★ Software Application Types: Utilities - Tools for system maintenance, security, and productivity.\n\n",
    ],
    tech: [
      { name: "Utilities", icon: "mdi:tools" },
      { name: "System", icon: "mdi:monitor" }
    ],
  },
  {
    id: 9,
    title: "Basic Concepts and Definitions of Data and Database",
    description:
      "A database is an organized collection of data that allows easy access, management, and updating. Unlike traditional files, databases store structured data with relationships between tables, improving efficiency and accuracy. For example, a student information system can store names, grades, and attendance records in a structured database for quick retrieval and reporting.",
    image: "https://i.imgur.com/mOLQlqf.jpeg",
    gallery: [
      "https://i.imgur.com/mOLQlqf.jpeg https://i.imgur.com/mOLQlqf.jpeg https://i.imgur.com/mOLQlqf.jpeg https://i.imgur.com/mOLQlqf.jpeg",
    ],
    category: "Fundamentals of Information and Computing",
    details:[
      "★ Data, Information, and Knowledge – Understand how raw data is processed into information and applied as knowledge.\n\n",
      "★ Concept of Number Systems – Learn binary, decimal, and hexadecimal systems and their importance in computing.\n\n",
      "★ Basic Concepts and Definitions of Data and Database – Explore structured data storage and the advantages of databases.\n\n",
    ],
    tech: [
      { name: "SQL", icon: "mdi:database" },
      { name: "Data", icon: "mdi:table" }
    ],
  },
  {
    id: 10,
    title: "Basic Concepts of Computer Networks: Topology, Scope, Types, and Tools",
    description:
      "Network topologies describe how devices are arranged and connected, such as star, mesh, and ring. Networks can be local (LAN) or wide-area (WAN) depending on scope. Tools like routers, switches, and network cables allow data to flow between devices efficiently. Understanding topologies and types helps optimize network performance and reliability.",
    image: "https://i.imgur.com/19pAm2c.jpeg",
    gallery: [
      "https://i.imgur.com/19pAm2c.jpeg https://i.imgur.com/19pAm2c.jpeg https://i.imgur.com/19pAm2c.jpeg https://i.imgur.com/19pAm2c.jpeg",
    ],
    category: "Hardware and Networking",
    details:[
      "★ Computer Hardware Concepts: IPOS Devices, Internal and External Parts - Input, processing, output, storage, and their components.\n\n",
      "★ Basic Concepts of Computer Networks: Topology, Scope, Types, and Tools - Network structures, types, and tools for communication.\n\n",
    ],
    tech: [
      { name: "Network", icon: "mdi:lan" },
      { name: "Topology", icon: "mdi:sitemap" }
    ],
  },
  {
    id: 11,
    title: "Security, Ethics, and Privacy: IT Code of Ethics",
    description:
      "IT professionals face ethical concerns like data privacy, hacking, and misuse of information. Security measures, including encryption and access control, protect sensitive data. The IT Code of Ethics provides guidelines for responsible behavior, ensuring professionals handle technology and information with integrity, fairness, and accountability.",
    image: "https://i.imgur.com/T12f25O.jpeg",
    gallery: [
      "https://i.imgur.com/T12f25O.jpeg https://i.imgur.com/T12f25O.jpeg https://i.imgur.com/T12f25O.jpeg https://i.imgur.com/T12f25O.jpeg",
    ],
    category: "Ethics and Future Technologies",
    details:[
      "★ Security, Ethics, and Privacy: IT Code of Ethics - Responsible and ethical use of technology and data protection.\n\n",
      "★ Future of Computing: Generative AI and Data Analytics - Emerging technologies, their applications, and ethical considerations.\n\n",
    ],
    tech: [
      { name: "Security", icon: "mdi:security" },
      { name: "Ethics", icon: "mdi:scale-balance" }
    ],
  },
  {
    id: 12,
    title: "HTML Programming",
    description:
      "HTML is the standard language used to structure web content. It uses tags to define headings, paragraphs, links, lists, images, and forms. HTML provides the basic framework for web pages, allowing content to be displayed consistently across browsers. Proper HTML structure is essential for accessibility, usability, and search engine optimization.",
    image: "https://i.imgur.com/hcFGOL9.jpeg",
    gallery: [
      "https://i.imgur.com/hcFGOL9.jpeg https://i.imgur.com/hcFGOL9.jpeg https://i.imgur.com/hcFGOL9.jpeg https://i.imgur.com/hcFGOL9.jpeg",
    ],
    category: "Programming and Development",
    details:[
      "★ Algorithm, Pseudocode, and Flowcharting - Planning and solving problems through algorithms, pseudocode, and flowcharts.\n\n",
      "★ HTML Programming - Structuring web content using HTML tags.\n\n",
      "★ CSS Programming - Styling web content for design, layout, and usability.\n\n",
    ],
    tech: [
      { name: "HTML", icon: "mdi:language-html5" },
      { name: "Web", icon: "mdi:web" }
    ],
  },
  {
    id: 13,
    title: "CSS Programming",
    description:
      "CSS enhances the appearance of HTML content by controlling colors, fonts, layouts, and spacing. It separates content from design, making web pages visually appealing and user-friendly. CSS syntax involves selectors, properties, and values, enabling designers to create consistent styles across multiple pages efficiently.",
    image: "https://i.imgur.com/ufAVlF6.jpeg",
    gallery: [
      "https://i.imgur.com/ufAVlF6.jpeg https://i.imgur.com/ufAVlF6.jpeg https://i.imgur.com/ufAVlF6.jpeg https://i.imgur.com/ufAVlF6.jpeg",
    ],
    category: "Programming and Development",
    details:[
      "★ Algorithm, Pseudocode, and Flowcharting - Planning and solving problems through algorithms, pseudocode, and flowcharts.\n\n",
      "★ HTML Programming - Structuring web content using HTML tags.\n\n",
      "★ CSS Programming - Styling web content for design, layout, and usability.\n\n",
    ],
    tech: [
      { name: "CSS", icon: "mdi:language-css3" },
      { name: "Design", icon: "mdi:palette" }
    ],
  },
  {
    id: 14,
    title: "Future of Computing: Generative AI and Data Analytics",
    description:
      "Generative AI can create text, images, or code automatically, unlike traditional AI that follows pre-defined rules. Data analytics extracts insights from large datasets, helping industries make informed decisions. Both technologies are transforming fields like healthcare, education, and business. Ethical concerns, including bias, privacy, and responsible use, must be considered as these technologies advance.",
    image: "https://i.imgur.com/gA09JaD.jpeg",
    gallery: [
      "https://i.imgur.com/gA09JaD.jpeg https://i.imgur.com/gA09JaD.jpeg https://i.imgur.com/gA09JaD.jpeg https://i.imgur.com/gA09JaD.jpeg",
    ],
    category: "Ethics and Future Technologies",
    details:[
      "★ Security, Ethics, and Privacy: IT Code of Ethics - Responsible and ethical use of technology and data protection.\n\n",
      "★ Future of Computing: Generative AI and Data Analytics - Emerging technologies, their applications, and ethical considerations.\n\n",
    ],
    tech: [
      { name: "AI", icon: "mdi:brain" },
      { name: "Analytics", icon: "mdi:chart-timeline-variant" }
    ],
  },
],
  },
  contact: {
    heading:
      "Have a project in mind? Get in touch and let's create something amazing.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125586.32273847265!2d123.76589191948881!3d10.376018864250407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999258dcd2dfd%3A0x4c34030cdbd33507!2sCebu%20City%2C%20Cebu%2C%20Philippines!5e0!3m2!1sen!2sus!4v1765795441763!5m2!1sen!2sus",
      address: "Cebu City, Philippines",
    },
  },
  morphingTexts: {
    about: ["Aspiring Web Developer"] as const,
    projects: ["My Portfolio"] as const,
    contact: ["Let's Build Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Portfolio", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Darlene Renee M. Otadoy",
    description: "Learning step by step through projects and collaboration",
    contact: {
      email: "25102581@usc.edu.ph",
      phone: "09123456789",
      location: "Cebu City, Philippines",
    },
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://facebook.com",
        icon: "mdi:facebook",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/itsdarlinggg/",
        icon: "mdi:instagram",
      },
      {
        platform: "YouTube",
        url: "https://youtube.com",
        icon: "mdi:youtube",
      },
      {
        platform: "X",
        url: "https://x.com",
        icon: "simple-icons:x",
      },
    ],
    services: ["Graphic Design & Video Editing",
    "Basic UI/UX Design",

    ],
  },
} as const;

