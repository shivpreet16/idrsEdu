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
        text:`"At IDRS, we are dedicated to shaping curious minds and building a strong foundation for our students' future. Our aim is to guide each child to discover their strengths, embrace challenges, and emerge as confident, capable individuals ready to lead with purpose."`,
        name:'Atul Hans, Principal, IDRS School'
    }
    const vicePrincipal={
        img:'/ruchi_manhas.jpg',
        image_type:'round',
        text:`"At IDRS, we foster a nurturing environment where students are encouraged to explore, excel, and develop into confident leaders of tomorrow."`,
        name:'Ruchi Manhas, Vice Principal, IDRS School'
      }
      const chairPerson={
        img:'/supinder_kour.jpg',
        image_type:'round',
        text:`"Under her guidance, our school has flourished, creating an environment where every child is encouraged to discover their potential and pursue their passions. Supinder ma’am’s commitment to fostering a nurturing and innovative atmosphere reflects her belief in the transformative power of education."`,
        name:'Supinder Kour , Chairperson, IDRS School'
        
    }
  return (
    <div className="h-fit w-screen bg-primary">
      <KnowUsCard img={schoolInfo.img} text={schoolInfo.text} right={true}/>
      <KnowUsCard img={chairPerson.img} text={chairPerson.text} right={true} image_type={chairPerson.image_type} name={chairPerson.name}/>
      <KnowUsCard img={principal.img} text={principal.text} right={false} image_type={principal.image_type} name={principal.name}/>
      <KnowUsCard img={vicePrincipal.img} text={vicePrincipal.text} right={true} image_type={vicePrincipal.image_type} name={vicePrincipal.name}/>
    </div>
  );
};

export default KnowUs;
