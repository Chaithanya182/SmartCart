import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const PrivacyPolicy = () => {
    return (
        <div>
            <div className='text-2xl pt-10 border-t'>
                <Title text1={'PRIVACY'} text2={'POLICY'} />
            </div>

            <div className='my-10 flex flex-col gap-16 text-gray-800 text-sm'>
                <p>Your privacy is important to us. It is SmartCart's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
            </div>

        </div>
    )
}

export default PrivacyPolicy
