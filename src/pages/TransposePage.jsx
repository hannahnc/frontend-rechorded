import { Button, Heading, Text, Textarea, Box} from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import React, { Component } from "react"
import { TbCircleArrowUp, TbCircleArrowDown } from "react-icons/tb";


const chords = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
    'Am', 'A#m', 'Bm', 'Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m']

const dict = {
    'A': 0,
    'A#': 1,
    'B': 2,
    'C': 3,
    'C#': 4,
    'D': 5,
    'D#': 6,
    'E': 7,
    'F': 8,
    'F#': 9,
    'G': 10,
    'G#': 11
}

class TransposePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            out: '',
            count: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handlePlus = this.handlePlus.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
    }

    transpose(v, n) {
        var newVal = ''
        var newArr = []
        var ch = v.split("\n")
        for (var i = 0; i < ch.length; i++) {
            var temp = ch[i].split(" ")
            for (var j = 0; j < temp.length; j++) {
                if (chords.includes(temp[j])) {
                    var index = 0
                    if (temp[j].slice(-1) === 'm') {

                        if (temp[j].length === 3) {
                            index = dict[temp[j].slice(0, 2)] + n
                            if (index < 0) index += 12
                            index = index % 12
                        }
                        else {
                            index = dict[temp[j].slice(0, 1)] + n
                            if (index < 0) index += 12
                            index = index % 12
                        }
                        var newch = chords[index] + 'm'
                        newArr.push(newch)
                    }
                    else {
                        index = dict[temp[j]] + n
                        if (index < 0) index += 12
                        index = index % 12
                        newArr.push(chords[index])
                    }
                }
            }
            newArr.push("\n")
        }

        for (i = 0; i < newArr.length; i++) {
            if (i === 0) newVal = newArr[0] + ' '
            else if (i === newArr.length - 1) newVal += newArr[i]
            else if (newArr[i] === '\n') newVal += newArr[i]
            else newVal += newArr[i] + ' '
        }
        return newVal
    }
    handleChange(event) {
        this.setState({ value: event.target.value, out: event.target.value, count: 0 })
    }
    handlePlus(event) {
        if (this.state.count < 11) {
            const newVal = this.transpose(this.state.out, 1)
            this.setState({ out: newVal, count: this.state.count + 1 })
        }
    }

    handleMinus(event) {
        if (this.state.count > -11) {
            const newVal = this.transpose(this.state.out, -1)
            this.setState({ out: newVal, count: this.state.count - 1 })
        }
    }

    render() {
        return (
            <> <Box padding={8}>
                <Heading mt={16} textAlign={"start"} size={"2xl"} ></Heading>
                Enter chords with spaces in between. Use sharps instead of flats. (Example: Dm G A# Am)

                <Text mt={5} fontWeight={"bold"}>Chords:</Text>

                <Textarea value={this.state.value} onChange={this.handleChange}></Textarea>

                <Button onClick={this.handleMinus} type="button" bg={"lightpink"} variant={"ghost"} mt={5} mr={3}>
                    <TbCircleArrowDown size={20}></TbCircleArrowDown>
                </Button>

                <Button onClick={this.handlePlus} type="button" bg={"lightpink"} variant={"ghost"} mt={5} >
                    <TbCircleArrowUp size={20}></TbCircleArrowUp>
                </Button>

                <Text mt={5} fontWeight={"bold"}>Transposed:</Text>

                <Textarea readOnly value={this.state.out}></Textarea>
            </Box>
            </>
        )
    }
}

export default TransposePage