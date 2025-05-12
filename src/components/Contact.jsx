import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        feedback: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        alert('Таны санал амжилттай илгээгдлээ!\n\n' + JSON.stringify(form, null, 2));
        setForm({ name: '', email: '', feedback: '' });
    };

    return (
        <section className="section" id="contact">
            <div className="container" style={{ maxWidth: 600, margin: '0 auto' }}>
                <div className="section-title">
                    <h2>Холбоо барих</h2>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Нэр:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '0.7rem',
                                margin: '0.5rem 0 1rem 0',
                                borderRadius: 6,
                                border: '1px solid #ccc',
                                background: '#fff',
                                color: '#222'
                            }}
                        />
                    </label>
                    <label>
                        Имэйл:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '0.7rem',
                                margin: '0.5rem 0 1rem 0',
                                borderRadius: 6,
                                border: '1px solid #ccc',
                                background: '#fff',
                                color: '#222'
                            }}
                        />
                    </label>
                    <label>
                        Санал хүсэлт:
                        <textarea
                            name="feedback"
                            value={form.feedback}
                            onChange={handleChange}
                            required
                            rows={6}
                            style={{
                                width: '100%',
                                padding: '0.9rem',
                                borderRadius: 8,
                                border: '1.5px solid #e8b021',
                                margin: '0.5rem 0 1.5rem 0',
                                fontSize: '1.08rem',
                                resize: 'vertical',
                                minHeight: 120,
                                background: '#fff',
                                color: '#222'
                            }}
                            placeholder="Санал хүсэлтээ энд бичнэ үү..."
                        />
                    </label>
                    <button
                        type="submit"
                        className="btn"
                        style={{ width: '100%', marginTop: '1rem' }}
                    >
                        Илгээх
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;