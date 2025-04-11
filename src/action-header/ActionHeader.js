import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import './ActionHeader.css'

function ActionHeader() {
  return (
    <header>
      <div>
        <button>
          <Icon icon={faCaretLeft} />
        </button>
        <button>
          <Icon icon={faCaretRight} />
        </button>
      </div>
      <button>
        Today
      </button>
    </header>
  );
}

export default ActionHeader;