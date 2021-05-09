import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled("div")`
margin-top: 1rem;

--main-flower: #008000;
--nose: #ffc0cb;
--stem: #008000;
--pot: #FF7043;
--pot-shadow: #d66f51;
--transform-leaves-left: rotate(-283deg) skewX(-12deg)  skewY(-4deg);
--transform-leaves-right: rotate(-163deg) skewX(-12deg) skewY(-4deg);

@keyframes blink {
    0%, 100% {
      transform: scale(1, 0.05);
    }
    5%, 95% {
      transform: scale(1, 1);
    }
  }

.flower{
    position: relative;
}

.flower__stem {
    position: absolute;
    height: 150px;
    width: 8px;
    background: var(--stem);
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);  
}

.flower__head {
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background: var(--main-flower);
  margin-left: 35px;
  margin-top: 90px;
  position: relative;
}

.flower__head::after, .flower__head::before {
  content: '';
  position: absolute;
  background: var(--main-flower);
  border-radius: 20px;
  width: 120px;
  height: 40px;
  transform: rotate(60deg);
  top: 0px;
  left: 0;
  z-index: 2;
}

.flower__head::before {
  transform: rotate(-60deg);
}

.flower__eye {
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 3;
  background: #fff;
  border-radius: 50%;
  animation: blink 2s infinite;
}
.flower__eye.left {
  left: 30%;
}
.flower__eye.right {
  left: 50%;
}
.flower__eye span {
  position: absolute;
  width: 10px;
  height: 10px;
  margin-left: 5px;
  margin-top: 5px;
  background: black;
  border-radius: 50%;
}

.flower__nose {
  position: absolute;
  left: 48%;
  transform: translateX(-50%);
  top: 60%;
  width: 15px;
  height: 15px;
  z-index: 3;
  background: var(--nose);
  border-radius: 50%;
}
.flower__pot {
    width: 100px;
    height: 20px;
    background-color: var(--pot);
    position: absolute;
    top: 190px;
    left: 50%;
    transform: translateX(-50%);
  }

  .flower__pot--shadow {
    width: 72px;
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid var(--pot-shadow);
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  .flower__pot--bottom {
    width: 50px;
    height: 0px;
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 50px solid var(--pot);
    top: 20px;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
  }

  .flower__leaf {
    width: 30px;
    height: 30px;
    background: var(--stem);
    position: absolute;
    top: 100px;
    left: 60px;
    border-radius: 50px;
    border-top-right-radius: 0;
    transform: var(--transform-leaves-left);
  }
  .flower__leaf--shadow {
    position: absolute;
    background: rgba(0, 0, 0, 0.25);
    height: 15px;
    width: 15px;
    top: 105px;
    left: 68px;
    border-radius: 50px;
    border-top-right-radius: 0;
    transform: var(--transform-leaves-left);
  }
  .flower__leaf--shadow.oposite {
    top: 115px;
    left: 115px;
    transform: var(--transform-leaves-right);
  }
  .flower__leaf.oposite {
    top: 110px;
    left: 105px;
    transform: var(--transform-leaves-right);
  }

.button,
  .button span {
    position: relative;
  }
    a:hover {
      .flower {
        transition: all 1s ease-in-out;
      }
      .button {
        box-shadow: 0px 0px 36px #c80de0;
        transition: all 1s ease-in-out;
      }
    }
    
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
      width: 12rem;
      height: 4.5rem;
      background: #008000;
      box-shadow: 0px 0px 16px #008000;
      border-radius: .5rem;
      z-index: 3;
      border: 1px solid #008000;
      transition: all 1s ease-in-out;
      span {
          display: flex;
          align-items: center;
          column-gap: .5rem;
        font-size: 35px;
        line-height: 70px;
        transition: all 0.3s ease-in-out;
        background: white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
    }
  }
}
`;

const CallToAction = ({ children, link = "/" }) => {
  return (
    <Button>
      <Link to={link}>
        <div className="button">
          <span>{children}</span>
        </div>
      </Link>
      <div class="flower">
        <div class="flower__head">
          <div class="flower__eye left">
            <span></span>
          </div>
          <div class="flower__nose"></div>
          <div class="flower__eye right">
            <span></span>
          </div>
        </div>

        <div class="flower__leaf"></div>
        <div class="flower__leaf--shadow"></div>
        <div class="flower__leaf oposite"></div>
        <div class="flower__leaf--shadow oposite"></div>

        <div class="flower__stem"></div>

        <div class="flower__pot">
          <div class="flower__pot--shadow"></div>
          <div class="flower__pot--bottom"></div>
        </div>
      </div>
    </Button>
  );
};

export default CallToAction;
