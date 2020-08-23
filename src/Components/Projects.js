import React, {Component} from 'react'
import SliderBar from './SliderBar';


class Projects extends Component {
    render(){
        return(
            <>
            <h1>Projects</h1>
            <SliderBar title="Reversi"
                blurb={<p>One of my earliest JavaScript projects, a simple game of Reversi (also known as Othello) for two players.</p>}
                externalLink="https://jrmartinez91.github.io/unit1_project.github.io/"
                backgroundURL="https://i.imgur.com/kwg2V3M.png"/>
            <SliderBar title="Musical Automat"
                blurb={<><p>Annasthesia’s Marvelous Musical Automat is a utility designed to work alongside RythmBot for Discord. Rythm allows users to stream audio from Youtube videos through a Discord voice chat. The Musical Automat provides a platform for users to aggregate a library of Youtube links, and organize them by title, artist, genre, and customizable tags.</p><p>
                The Musical Automat is a work in progress. Future features will include unique user accounts , customizable playlists, and exporting playlists as files which can then by imported by other users.
                </p></>}
                externalLink="https://marvelous-musical-automat.herokuapp.com/tracklist"
                backgroundURL="https://i.imgur.com/mV3iJo1.png"/>
            <SliderBar title="Sample Library Database"
                blurb={
                    <><p>An example of a database system designed for use by a library of some sort. Built with Ruby on Rails and PostgreSQL, it tracks users, book, and checkout dates.</p><p>Coming Soon!</p></>}
                />
            </>
        )
    }
}

export default Projects