const testimonials = [
  {
    name: "Grace N.",
    role: "Student Nurse",
    text: "This completely changed how I see my career as a nurse.",
  },
  {
    name: "Michael O.",
    role: "Practicing Nurse",
    text: "I now have clarity, direction, and confidence in my future.",
  },
  {
    name: "Adaeze K.",
    role: "Midwife",
    text: "The mentorship and insights are powerful and life-changing.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-gray-50">

      <h2 className="text-center text-2xl font-bold mb-12">
        What Nurses Are Saying
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">

        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded shadow">

            <p className="text-gray-600 mb-4">
              "{t.text}"
            </p>

            <div className="font-bold">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Testimonials;