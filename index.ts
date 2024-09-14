interface ResumeData {
    name: string;
    email: string;
    school: string;
    degree: string;
    gradYear: string;
    company: string;
    role: string;
    workYears: string;
    skills: string;
  }
  
  const form = document.getElementById('resumeForm') as HTMLFormElement;
  const resumeDisplay = document.getElementById('resumeDisplay') as HTMLElement;
  
  // Function to generate resume
  const generateResume = (data: ResumeData) => {
    resumeDisplay.innerHTML = `
      <h2>${data.name}</h2>
      <p>Email: ${data.email}</p>
      
      <h3>Education</h3>
      <p>${data.school}, ${data.degree} (${data.gradYear})</p>
      
      <h3>Work Experience</h3>
      <p>${data.company}, ${data.role} (${data.workYears} years)</p>
      
      <h3>Skills</h3>
      <p>${data.skills.split(',').join(', ')}</p>
    `;
  };
  
  // Function to validate form and handle submit
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const gradYear = (document.getElementById('gradYear') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const workYears = (document.getElementById('workYears') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
  
    // Perform validation
    if (!name || !email || !school || !degree || !gradYear || !company || !role || !workYears || !skills) {
      alert("All fields must be filled out!");
      return;
    }
  
    generateResume({ name, email, school, degree, gradYear, company, role, workYears, skills });
  });
  
  // Real-time resume update
  form.addEventListener('input', () => {
    const formData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      school: (document.getElementById('school') as HTMLInputElement).value,
      degree: (document.getElementById('degree') as HTMLInputElement).value,
      gradYear: (document.getElementById('gradYear') as HTMLInputElement).value,
      company: (document.getElementById('company') as HTMLInputElement).value,
      role: (document.getElementById('role') as HTMLInputElement).value,
      workYears: (document.getElementById('workYears') as HTMLInputElement).value,
      skills: (document.getElementById('skills') as HTMLInputElement).value
    };
  
    generateResume(formData);
  });
  