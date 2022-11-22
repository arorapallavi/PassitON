import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
const Bookdetail=()=>
{
	return(
	<div>
	Details on book {useParams().id}
	<br/><button >Add to Cart</button>
	<br/><Link to="/display"><button> Go back to display all books</button></Link>
	</div>
)
}

export default Bookdetail