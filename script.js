class TutorProfile extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        const template = document.createElement("template");

        template.innerHTML= `
        <style>
            div{
                border: 1px solid black;
                padding:1vw;
                margin:1vw;
                background-color:white;
            }
        </style>
        <div>
        <img src="/images/empty_profile.jpg" height="100px" width="100px" alt="Profile Picture">
        <h3 id="tutor_name">Name</h3>
        <p id="subject">Subject</p>
        <p id="bio">Bio</p>
        </div>
        `;
        for(let i=0; i<10; i++){
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        /* 
        const Name = this.shadowRoot.getElementById("tutor_name");
        const Subj = this.shadowRoot.getElementById("subj");
        const Bio = this.shadowRoot.getElementById("bio");
        */
    }
}
customElements.define("tutor-profiles",TutorProfile);