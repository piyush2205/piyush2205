import React from "react";
import GitHubCalendar from "react-github-calendar";


function Github() {
    return (
        <div style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <GitHubCalendar
                username="piyush2205"
                blockSize={20}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
                colorScheme='dark'

                style={{ marginTop: "50px" }}
            />
        </div>
    );
}

export default Github;