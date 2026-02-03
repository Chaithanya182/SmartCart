import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Delivery = () => {
    return (
        <div>
            <div className='text-2xl pt-10 border-t'>
                <Title text1={'DELIVERY'} text2={'INFORMATION'} />
            </div>

            <div className='my-10 flex flex-col gap-16 text-gray-800 text-sm'>
                <p>At SmartCart, we deliver to all major cities and towns. We partner with reputable courier services to ensure your orders reach you safely and on time.</p>
                <p>Standard delivery usually takes 3-5 business days. Express delivery options are available at checkout for select locations.</p>
                <p>You will receive a tracking number once your order is shipped. You can track your order status on our website under "My Orders".</p>
                <p>For any delivery related queries, please contact our support team at contact@smartcart.com.</p>
            </div>

        </div>
    )
}

export default Delivery
