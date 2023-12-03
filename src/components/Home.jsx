import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase-config"
import { CircularIndeterminate } from '../loadinganimation'
import DisplayPost from './DisplayPost'

export const Home = () => {
  const [allPost, setAllPost] = useState([])
  const [loading, setLoading] = useState(true)
  const postRef = collection(db, "post")


  useEffect(() => {
    setLoading(true)
    const getPosts = async () => {
      await getDocs(postRef)
        .then(data => {
          setAllPost(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
          setLoading(false)
        })

    }
    getPosts()
  }, [])
  return (

    <section className='max-w-7xl mx-30px-auto'>
      <h1 className='font-extrabold text-[40px]'>The Community <span>Showcase</span></h1>
      {/* <p className='mt-2 text-[15px] max-w-[500px]'>Pellentesque vulputate dignissim enim, et sollicitudin massa pellentesque ut. Proin luctus dui ut sem varius eleifend.</p> */}

      <div className='m-10'>
        {loading ? (
          <div className="flex justify-center item-center">
            <CircularIndeterminate />
          </div>
        ) : (
          <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
            {allPost && allPost.map(post => (
              <DisplayPost post={post} />
            ))}
          </div>
        )}
      </div>
    </section>

  )
}
