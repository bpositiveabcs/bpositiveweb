import React from 'react';
import TeamMember from './TeamMember';

const Team = () => (
    <div className="w3-container" style={{ padding: '128px 16px', backgroundColor: '#f0e7e7' }} id="team">
        <h3 className="w3-center">THE TEAM</h3>
        <div className="w3-row-padding" style={{ marginTop: '64px' }}>
            <TeamMember
                image_path="/images/us/sabina.png"
                name="Sabina-Eleny Andrei-Nicoară"
                email="sabina.andrei@stud.ubbcluj.ro"
                altName="Sabina"
            />
            <TeamMember
                image_path="/images/us/andreea.jpeg"
                name="Andreea-Marina Ion"
                email="andreea.marina.ion@stud.ubbcluj.ro"
                altName="Andreea"
            />
            <TeamMember
                image_path="/images/us/bianca.png"
                name="Bianca-Liana Fürtös"
                email="bianca.liana.furtos@stud.ubbcluj.ro"
                altName="Bianca"
            />
            <TeamMember
                image_path="/images/us/cristiana.png"
                name="Cristiana-Gabriela Pătroi"
                email="cristiana.patroi@stud.ubbcluj.ro"
                altName="Cristiana"
            />
        </div>
    </div>
);

export default Team;
