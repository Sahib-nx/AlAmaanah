
import { GraduationCap, Award, Users, Building2, Clock, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Building2, value: '150+', label: 'Projects Completed' },
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Award, value: '25+', label: 'Awards Won' }
  ];

  const skills = [
    { name: 'Structural Design', percentage: 95 },
    { name: 'Project Management', percentage: 90 },
    { name: 'AutoCAD/Revit', percentage: 88 },
    { name: 'Site Supervision', percentage: 92 }
  ];

  return (
    <section id="about" className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            About <span className="text-blue-800">Me</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column - Image & Stats */}
          <div className="w-full space-y-8">
            <div className="relative w-full">
              <div className="w-full h-80 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-blue-800 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Building2 className="w-16 h-16 mx-auto mb-4 opacity-60" />
                    <p className="text-lg opacity-80">Professional Engineer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                <GraduationCap className="w-8 h-8" />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-blue-800 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Building Tomorrow's Infrastructure
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                With over a decade of experience in civil engineering, I specialize in designing and managing 
                infrastructure projects that stand the test of time. My passion lies in creating sustainable, 
                innovative solutions that serve communities and enhance urban development.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                From residential complexes to commercial buildings, bridges to water treatment facilities, 
                I bring technical expertise and creative problem-solving to every project.
              </p>
            </div>

            {/* Location & Credentials */}
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <MapPin className="w-5 h-5 text-blue-800 flex-shrink-0" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>Licensed Professional Engineer | Metro City</span>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Core Competencies
              </h4>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-blue-800 to-yellow-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors hover:scale-105 transform"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Let's Work Together
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;