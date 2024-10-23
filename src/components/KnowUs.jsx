import React from "react";
import KnowUsCard from "./KnowUsCard";
const KnowUs = () => {
    const schoolInfo={
        img:'/school.jpg',
        text:"Join us at IDRS School Jammu, where every step is a leap towards greatness! Our vibrant community is committed to nurturing young minds, building a foundation for success, and instilling confidence in each student. At IDRS, learning is more than just education—it's a journey of discovery, creativity, and personal growth. Together, we shape future leaders, thinkers, and innovators ready to conquer the world."
    }
    const principal={
        img:'/atul_hans.jpg',
        image_type:'round',
        text:`"At IDRS, we are dedicated to shaping curious minds and building a strong foundation for our students' future. Our aim is to guide each child to discover their strengths, embrace challenges, and emerge as confident, capable individuals ready to lead with purpose." — Atul Hans, Principal, IDRS School`
    }
    const vicePrincipal={
        img:'/ruchi_manhas.jpg',
        image_type:'round',
        text:`"At IDRS, we foster a nurturing environment where students are encouraged to explore, excel, and develop into confident leaders of tomorrow." — Ruchi Manhas, Vice Principal, IDRS School`
    }
  return (
    <div className="h-fit w-screen bg-primary">
      <KnowUsCard img={schoolInfo.img} text={schoolInfo.text} right={true}/>
      <KnowUsCard img={principal.img} text={principal.text} right={false} image_type={principal.image_type}/>
      <KnowUsCard img={vicePrincipal.img} text={vicePrincipal.text} right={true} image_type={vicePrincipal.image_type}/>
    </div>
  );
};

export default KnowUs;
