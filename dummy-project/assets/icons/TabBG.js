import * as React from "react"
import Svg, { Ellipse ,Path} from "react-native-svg"

function TabBG(props) {
  return (
    <Svg
            width={75}
            height={49}
            viewBox="0 0 75 49"
            {...props}
        >
            <Path
                d="M75.2 0v49H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                fill={"#fff"}
            />
        </Svg>
  )
}

export default TabBG
