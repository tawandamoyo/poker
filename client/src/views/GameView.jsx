import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { socketContext } from "../context/socketContext.jsx";

import Table from "./Table.jsx"

function GameView() {
    return (
        <>
            <Table/>
        </>
    )
}

export default GameView;