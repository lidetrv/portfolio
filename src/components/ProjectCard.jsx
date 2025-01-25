import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

const ProjectCard = ({ title, description, link, id}) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchLikes = async () => {
      const docRef = doc(db, "projects", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLikes(docSnap.data().likes || 0);
      } else {
        // If the document doesn't exist, initialize it
        await setDoc(docRef, { likes: 0 });
      }
    };

    fetchLikes();
  }, [id]);

  // Increment likes in Firestore
  const handleLike = async () => {
    const docRef = doc(db, "projects", id);

    await setDoc(docRef, { likes: increment(1) }, { merge: true });

    setLikes((prev) => prev + 1); // Update UI instantly
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href={link} className="text-blue-500 hover:underline mt-4 inline-block">
        View Project
      </a>
      <button
        onClick={handleLike}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Like ({likes})
      </button>
    </div>
  );
};

export default ProjectCard;




// const ProjectCard = ({ id, title, description, link }) => {


//   return (
//     <div className="border border-blue-500 p-6 rounded-xl shadow-lg bg-slate-900 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
//       <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
//       <p className="text-slate-300 text-base mb-6 leading-relaxed">
//         {description}
//       </p>
//       <div className="flex flex-row items-center justify-between">

//       <a
//         href={link}
//         className="inline-block text-white bg-blue-900 px-6 py-3 rounded-full shadow hover:bg-blue-800 hover:shadow-lg transition-all duration-300"
//       >
//         View Project
//       </a>
//       <div className="flex items-center mt-4">
//         <button
//           onClick={handleLike}
//           className="text-white bg-blue-900 px-4 py-2 rounded-full hover:bg-blue-800 transition-all duration-300"
//         >
//         <i class="fa-solid fa-thumbs-up"></i>
//         </button>
//         <span className="ml-3 text-white">{likes} Likes</span>
//       </div>

//       </div>
      
//     </div>
//   );
// };

// export default ProjectCard;