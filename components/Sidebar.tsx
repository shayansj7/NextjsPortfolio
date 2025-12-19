// components/CertificationsSidebar.tsx
import {
  FaAws,
  FaPython,
  FaMusic,
  FaMicrophone,
  FaFutbol,
  FaDumbbell,
  FaFilm,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <section className="bg-white">
      <h3>Education</h3>
      <ul>
        <li className="education">
          <strong>Seneca Polytechnic</strong>
          <div className="sub">Computer Programming & Analysis</div>
          <div className="sub">2023 - 2025</div>
        </li>
      </ul>
      <h3>Certifications</h3>

      <ul className="certifications">
        <li>
          <FaAws size={20} />
          <span>AWS Cloud Practitioner</span>
        </li>

        <li>
          <FaPython size={20} />
          <span>Python 3 エンジニア認定基礎試験</span>
        </li>
      </ul>

      {/* Hobbies */}
      <h3>Hobbies</h3>
      <ul className="hobbies">
        <li>
          <FaMusic size={18} />
          <span>Making Music</span>
        </li>

        <li>
          <FaMicrophone size={18} />
          <span>Rap</span>
        </li>

        <li>
          <FaFutbol size={18} />
          <span>Soccer</span>
        </li>

        <li>
          <FaDumbbell size={18} />
          <span>Workout</span>
        </li>

        <li>
          <FaFilm size={18} />
          <span>Movies / TV Series</span>
        </li>
      </ul>
    </section>
  );
}
