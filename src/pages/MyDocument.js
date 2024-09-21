import React, { useState, useRef } from 'react';
import {
    Page, Text, View, Document, StyleSheet
} from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { useDispatch } from "react-redux";
import { getNotes } from "../Redux/notes/note.actions";


// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
    },
    section: {
        margin: 100,
        padding: 100,
        flexGrow: 1
    }
});

const noteData = [

]

// Create Document Component
const MyDocument = () => (

    <Document>
        <Page style={styles.page}>
            <View style={styles.section}>
                <Text>
                    Title: Blue Lemonade
                </Text>
                <Text>
                    Artist: Red Velvet
                </Text>
                <Text>
                    YouTube Link: https://www.youtube.com/watch?v=bH5rlpk70Ro
                </Text>
                <Text>
                    Key: D
                </Text>
                <Text>
                    Lyrics and/or Chords: [Verse 1: Joy, Seulgi] It's so clear The space between your eyes and mine A wave is coming over us A slightly blue light spins and freshness spreads over our lips
                </Text>
            </View>
        </Page>
    </Document>
);

ReactDOM.render(<MyDocument />, document.getElementById('root'));

export default MyDocument;
