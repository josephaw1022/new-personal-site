import React from 'react';
import type { ReactNode, ReactElement } from 'react';
import { MediaCard } from './card';


interface ProjectItem {
    title: string;
    description: string;
    imageUrl: string;
}


const ExperienceToList: ProjectItem[] = [
    {
        title: 'Single Page Applications',
        description: 'Have worked with a number of single page applications, including React, Angular, Vue, and Next.js.',
        imageUrl: 'reactjs.png',
    },
    {
        title: 'Rancher UI',
        description: 'Have done basic deployments and have been able to use the UI to create and manage resources.',
        imageUrl: 'rancher.jpeg',
    },
    {
        title: "Serverless Framework",
        description: "Have worked with the Serverless Framework. Have been able to create and deploy functions with the framework.",
        imageUrl: 'serverless-framework.png',
    },
    {
        title: 'AWS',
        description: 'Have worked with AWS. Have been able to create and work with s3 buckets, lambda functions, cloudfront, container services, eks, and more in AWS.',
        imageUrl: 'aws.png',
    },
    {
        title: 'DotNet',
        description: 'Have worked with the .NET Framework. ',
        imageUrl: 'dotnet-core.jpeg',
    },
    {
        title: "Docker",
        description: "Have worked with Docker. Have been able to create and deploy containers with Docker.",
        imageUrl: 'docker.png',
    },
    {
        title: "MongoDB",
        description: "Have worked with MongoDB. Have been able to create and deploy databases with MongoDB.",
        imageUrl: 'mongo-db.png',
    },
    {
        title: "Relational Databases",
        description: "Have worked with Relational Databases in many different environments.",
        imageUrl: 'sql.png',
    }
]




export function Experience() {


    return (
        <section className={"flex flex-1 flex-col py-10 justify-center items-center min-h-screen  "} id={"Experience"}>
            <h1 className={"duration-150 text-center text-4xl sm:text-5xl my-20 "}>Experience</h1>
            <div className={"flex flex-1 flex-col md:flex-row justify-center items-start flex-wrap"}>
                {
                    ExperienceToList.map((project, index) => (
                        <MediaCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                        />
                    ))
                }
            </div>
        </section>
    )
}