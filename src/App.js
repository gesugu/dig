// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import universities from "./components/Universities";
// import "./App.css"

// function App() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     education: "",
//     interests: "",
//     goals: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const analyzeAnswers = () => {
//     let recommendedProfession = "";
//     let analysis = "";
//     let pros = [];
//     let cons = [];
//     let recommendedUniversities = [];

//     if (formData.interests.toLowerCase().includes("программирование")) {
//       recommendedProfession = "Программист";
//       analysis = "Эта профессия подходит вам, так как вы интересуетесь технологиями и любите решать задачи. Программисты востребованы на рынке и могут работать удаленно.";
//       pros = ["Высокий уровень дохода", "Возможность удаленной работы", "Большой спрос на рынке труда"];
//       cons = ["Сильная конкуренция", "Необходимость постоянного обучения"];
//       recommendedUniversities = universities.filter((uni) =>
//         ["USA", "UK", "Kazakhstan"].includes(uni.country)
//       );
//     } else if (formData.interests.toLowerCase().includes("дизайн")) {
//       recommendedProfession = "Дизайнер";
//       analysis = "Вы любите творческую работу, и дизайн может стать отличным выбором, если вам нравится создавать визуальные концепции.";
//       pros = ["Творческая работа", "Возможность фриланса", "Широкие возможности в разных отраслях"];
//       cons = ["Может быть трудно найти стабильную работу", "Зависимость от отзывов клиентов"];
//       recommendedUniversities = universities.filter((uni) =>
//         ["UK", "Kazakhstan"].includes(uni.country)
//       );
      
//     }else if (formData.interests.toLowerCase().includes("")) {
//       recommendedProfession = "Дизайнер";
//       analysis = "Вы любите творческую работу, и дизайн может стать отличным выбором, если вам нравится создавать визуальные концепции.";
//       pros = ["Творческая работа", "Возможность фриланса", "Широкие возможности в разных отраслях"];
//       cons = ["Может быть трудно найти стабильную работу", "Зависимость от отзывов клиентов"];
//       recommendedUniversities = universities.filter((uni) =>
//         ["UK", "Kazakhstan"].includes(uni.country)
//       );
//     } else {
//       recommendedProfession = "Неопределено";
//       analysis = "Мы не смогли определить подходящую профессию на основе ваших ответов. Попробуйте ввести больше информации.";
//       pros = [];
//       cons = [];
//       recommendedUniversities = [];
//     }

//     navigate("/results", {
//       state: {
//         formData,
//         recommendedProfession,
//         analysis,
//         pros,
//         cons,
//         recommendedUniversities,
//       },
//     });
//   };

//   return (
//     <div className="app-container">
//       <h1>Карьерный советник</h1>
//       {step === 1 && (
//         <>
//           <h2>Базовая информация</h2>
//           <p>Имя:</p>
//           <input type="text" name="name" placeholder="Имя" onChange={handleChange} />
//           <p>Возраст:</p>
//           <input type="number" name="age" placeholder="Возраст" onChange={handleChange} />
//           <select name="education" onChange={handleChange}>
//             <option value="">Образование</option>
//             <option value="Неполное">Неполное среднее</option>
//             <option value="Среднее">Среднее</option>
//             <option value="Высшее">Высшее</option>
//             <option value="Бакалавриат">Бакалавриат</option>
//           </select>
//         </>
//       )}
//       {step === 2 && (
//         <>
//           <h2>Интересы</h2>
//           <input type="text" name="interests" placeholder="Интересы" onChange={handleChange} />
//           <input type="text" name="goals" placeholder="Цели" onChange={handleChange} />
//         </>
//       )}
//       {step === 3 && <button onClick={analyzeAnswers}>Проанализировать</button>}
//       <div className="buttons">
//         {step > 1 && <button onClick={() => setStep(step - 1)}>Назад</button>}
//         {step < 3 && <button onClick={() => setStep(step + 1)}>Далее</button>}
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import universities from "./components/Universities";
// import "./App.css"

// function App() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     education: "",
//     interests: "",
//     goals: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const analyzeAnswers = () => {
//     let recommendedProfession = "";
//     let analysis = "";
//     let pros = [];
//     let cons = [];
//     let recommendedUniversities = [];

//     const interestsLower = FormData.interests

//     if (formData.interests.toLowerCase().includes("программирование")) {
//       recommendedProfession = "Программист";
//       analysis = "Эта профессия подходит вам, так как вы интересуетесь технологиями и любите решать задачи. Программисты востребованы на рынке и могут работать удаленно.";
//       pros = ["Высокий уровень дохода", "Возможность удаленной работы", "Большой спрос на рынке труда"];
//       cons = ["Сильная конкуренция", "Необходимость постоянного обучения"];
//       recommendedUniversities = universities.filter((uni) =>
//         ["USA", "UK", "Kazakhstan"].includes(uni.country)
//       );
//     } else if (formData.interests.toLowerCase().includes("дизайн")) {
//       recommendedProfession = "Дизайнер";
//       analysis = "Вы любите творческую работу, и дизайн может стать отличным выбором, если вам нравится создавать визуальные концепции.";
//       pros = ["Творческая работа", "Возможность фриланса", "Широкие возможности в разных отраслях"];
//       cons = ["Может быть трудно найти стабильную работу", "Зависимость от отзывов клиентов"];
//       recommendedUniversities = universities.filter((uni) =>
//         ["UK", "Kazakhstan"].includes(uni.country)
//       );
      
//     }else if (formData.interests.toLowerCase().includes("спорт")) {
//       recommendedProfession = "Спортсмен";
//       analysis = "Вы любите творческую работу, и дизайн может стать отличным выбором, если вам нравится создавать визуальные концепции.";
//       pros = ["Творческая работа", "Возможность фриланса", "Широкие возможности в разных отраслях"];
//       cons = ["Может быть трудно найти стабильную работу", "Зависимость от отзывов клиентов"];
//       recommendedUniversities = universities.filter((uni) =>
//         ["UK", "Kazakhstan"].includes(uni.country)
//       );
//     }else if (formData.interests.toLowerCase().includes("музыка")) {
//       recommendedProfession = "Музыкант";
//       analysis = "Вы любите творческую работу, и дизайн может стать отличным выбором, если вам нравится создавать визуальные концепции.";
//       pros = ["Творческая работа", "Возможность фриланса", "Широкие возможности в разных отраслях"];
//       cons = ["Может быть трудно найти стабильную работу", "Зависимость от отзывов клиентов"];
//       recommendedUniversities = universities.filter((uni) =>
//         ["UK", "Kazakhstan"].includes(uni.country)
//       );
//     } else {
//       recommendedProfession = "Неопределено";
//       analysis = "Мы не смогли определить подходящую профессию на основе ваших ответов. Попробуйте ввести больше информации.";
//       pros = [];
//       cons = [];
//       recommendedUniversities = [];
//     }

//     navigate("/results", {
//       state: {
//         formData,
//         recommendedProfession,
//         analysis,
//         pros,
//         cons,
//         recommendedUniversities,
//       },
//     });
//   };

//   return (
//     <div className="app-container">
//       <h1>Карьерный советник</h1>
//       {step === 1 && (
//         <>
//           <h2>Базовая информация</h2>
//           <p>Имя:</p>
//           <input type="text" name="name" placeholder="Имя" onChange={handleChange} />
//           <p>Возраст:</p>
//           <input type="number" name="age" placeholder="Возраст" onChange={handleChange} />
//           <select name="education" onChange={handleChange}>
//             <option value="">Образование</option>
//             <option value="Неполное">Неполное среднее</option>
//             <option value="Среднее">Среднее</option>
//             <option value="Высшее">Высшее</option>
//             <option value="Бакалавриат">Бакалавриат</option>
//           </select>
//         </>
//       )}
//       {step === 2 && (
//         <>
//           <h2>Интересы</h2>
//           {/* <input type="text" name="interests" placeholder="Интересы" onChange={handleChange} /> */}
//           <select name="interests" onChange={handleChange} className="interests">
//           <option value="">интересы</option>
//             <option value="программирование">программирование</option>
//             <option value="дизайн">дизайн</option>
//             <option value="спорт">спорт</option>
//             <option value="музыка">музыка</option>
//           </select>
//           <input type="text" name="goals" placeholder="Цели" onChange={handleChange} />
//         </>
//       )}
//       {step === 3 && <button onClick={analyzeAnswers}>Проанализировать</button>}
//       <div className="buttons">
//         {step > 1 && <button onClick={() => setStep(step - 1)}>Назад</button>}
//         {step < 3 && <button onClick={() => setStep(step + 1)}>Далее</button>}
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import universities from "./components/Universities";
import "./App.css";

function ProgressBar({ step }) {
  const progress = (step / 4) * 100; // Calculate progress as a percentage
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    education: "",
    interests: "",
    goals: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const analyzeAnswers = () => {
    let recommendedProfession = "";
    let analysis = "";
    let pros = [];
    let cons = [];
    let recommendedUniversities = [];

    if (formData.interests.toLowerCase().includes("программирование")) {
      recommendedProfession = "Programmer";
      analysis = "This career is right for you because you are interested in technology and enjoy solving problems.";
      pros = ["High level of income", "Possibility of remote work", "Great demand in the labor market"];
      cons = ["Сильная конкуренция", "Необходимость постоянного обучения"];
      recommendedUniversities = universities.filter((uni) =>
        ["USA", "UK", "Kazakhstan"].includes(uni.country)
      );
    } else if (formData.interests.toLowerCase().includes("дизайн")) {
      recommendedProfession = "Designer";
      analysis = "You love creative work, and design can be a great choice.";
      pros = ["Creative work", "Freelance opportunity", "Wide opportunities in different industries"];
      cons = ["It can be difficult to find stable work", "Depending on customer feedback"];
      recommendedUniversities = universities.filter((uni) =>
        ["UK", "Kazakhstan"].includes(uni.country)
      );
    } else if (formData.interests.toLowerCase().includes("спорт")) {
      recommendedProfession = "Athlete";
      analysis = "You love physical activity, and sports can be a great choice.";
      pros = ["Healthy lifestyle", "Opportunity to participate in competitions"];
      cons = ["Requires high physical fitness", "Risk of injury"];
      recommendedUniversities = universities.filter((uni) =>
        ["UK", "Kazakhstan"].includes(uni.country)
      );
    } else if (formData.interests.toLowerCase().includes("музыка")) {
      recommendedProfession = "Musician";
      analysis = "You love music and could try your hand at the music industry.";
      pros = ["Creative work", "Ample opportunities for self-expression"];
      cons = ["Difficulty finding a stable job", "Competition in the market"];
      recommendedUniversities = universities.filter((uni) =>
        ["UK", "Kazakhstan"].includes(uni.country)
      );
    } else {
      recommendedProfession = "Undefined";
      analysis = "We were unable to determine a suitable occupation based on your answers.";
      pros = [];
      cons = [];
      recommendedUniversities = [];
    }

    navigate("/results", {
      state: {
        formData,
        recommendedProfession,
        analysis,
        pros,
        cons,
        recommendedUniversities,
      },
    });
  };

  return (
    <div className="app-container">
      <h1 className="pApp">Career Advisor</h1>
      <ProgressBar step={step} />
      {step === 1 && (
        <>
          <h2>Basic Information</h2>
          <p className="PName">Name:</p>
          <input type="text" className="inputName" name="name" placeholder="Name" onChange={handleChange} />
          <p className="PName">Age:</p>
          <input type="number" className="inputAge" name="age" placeholder="Age" onChange={handleChange} />
          <p>Education:</p>
          <select name="education" className="selectEducation" onChange={handleChange}>
            <option value="">Education</option>
            <option value="Неполное">Incomplete secondary</option>
            <option value="Среднее">Secondary</option>
            <option value="Высшее">High</option>
            <option value="Бакалавриат">Bachelor's degree</option>
          </select>
        </>
      )}
      {step === 2 && (
        <>
          <h2>Interests</h2>
          <select name="interests" className="selectEducation" onChange={handleChange}>
            <option value="">Interests</option>
            <option value="программирование">Programming</option>
            <option value="дизайн">Design</option>
            <option value="спорт">Sport</option>
            <option value="музыка">Music</option>
            <option value="Рисование">Drawing</option>
            <option value="Наука">Science</option>
            <option value="Математика">Mathematics</option>
            <option value="Психология">Psychology</option>
            <option value="Литература">Literature</option>
            <option value="История">History</option>
            <option value="Архитектура">Architecture</option>
            <option value="Инженерия">Engineering</option>
            <option value="Путешествия">Trips</option>
            <option value="Бизнес">Business</option>
          </select>
          <input type="text" className="inputName" name="goals" placeholder="Goals" onChange={handleChange} />
        </>
      )}
      {step === 3 && (
        <>
          <h2>Personal qualities</h2>
          <p>Write here your personal qualities.</p>
          <input type="text" className="InputQualities" name="qualities" placeholder="Qualities" onChange={handleChange} />
        </>
      )}
      {step === 4 && <button onClick={analyzeAnswers}>Analyze</button>}
      <div className="buttons">
        {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
        {step < 4 && <button onClick={() => setStep(step + 1)}>Next</button>}
      </div>
    </div>
  );
}

export default App;
