import React from 'react'
import StoryStyle from './Story.module.css';
import PersonImage from '../../../../Assets/Person.png'
const Story = (props) => {
  return (
    <>
        <div className={StoryStyle.Container}>
            <div style={{backgroundImage:`url(${props.image})`}} className={StoryStyle.StoryImage}>
                
            </div>
            <div className={StoryStyle.Person}>
              <img src={PersonImage} alt="" />
              <p>Jackie Moncada</p>
            </div>
            <div className={StoryStyle.PersonText}>
              7 Signs and Symptoms of Iodine Deficiency
            </div>
        </div>
    </>
  )
}

export default Story