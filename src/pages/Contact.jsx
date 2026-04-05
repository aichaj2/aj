import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `*Contact Form - A&J Modest*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    window.open(`https://wa.me/212638063994?text=${encodeURIComponent(message)}`, '_blank')
    setFormData({ name: '', phone: '', message: '' })
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/212638063994', '_blank')
  }

  return (
    <div className="page">
      <div className="container-small">
        <div className="section-header">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon instagram">
                <img src={`${import.meta.env.BASE_URL}img/instagram.png`} alt="instagram"/>
              </div>
              <div>
                <p className="contact-label">Instagram</p>
                <p className="contact-value">@a_j_modest</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon whatsapp">
                <img src={`${import.meta.env.BASE_URL}img/whatsapp.png`} alt="whatsapp"/>
              </div>
              <div>
                <p className="contact-label">WhatsApp</p>
                <p className="contact-value">0638063994</p>
              </div>
            </div>
            <button onClick={openWhatsApp} className="btn-whatsapp">
              <span>Chat on WhatsApp</span>
            </button>
          </div>
          <div className="contact-form-box">
            <h3 className="form-title">Send us a message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input type="text" name="name" className="form-input" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" name="phone" className="form-input" placeholder="0638063994" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" rows="4" className="form-input" placeholder="How can we help you?" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-primary full-width">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact