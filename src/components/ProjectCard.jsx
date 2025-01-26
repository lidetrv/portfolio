import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ProjectCard = ({ title, description, link, id }) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchLikes = async () => {
      const docRef = doc(db, "projects", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLikes(docSnap.data().likes || 0);
      } else {
        // If the document is not found initialize it
        await setDoc(docRef, { likes: 0 });
      }
    };

    fetchLikes();
  }, [id]);

  // Increment likes in Firestore
  const handleLike = async () => {
    const docRef = doc(db, "projects", id);

    await setDoc(docRef, { likes: increment(1) }, { merge: true });

    setLikes((prev) => prev + 1); // Update UI 
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-between w-72"> {/* Adjusted padding and width */}
      <div>
        <h3 className="text-base font-semibold text-gray-800">{title}</h3> 
        <p className="text-sm text-gray-600 mt-2">{description}</p> 
        <a
          href={link}
          className="text-blue-500 hover:underline mt-3 inline-block text-sm" 
        >
          View Project
        </a>
      </div>
      <div className="mt-auto flex justify-end">
        <button
          onClick={handleLike}
          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm" 
        >
          Like ({likes})
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;


