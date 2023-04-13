import logofooter  from '../assets/img/LOGOF.png';
import '../style/components/footer.css'

export default function Footer (){

    return(
        <footer>
            <div id="footer-container">
                <img src={logofooter} alt="Logo" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
};