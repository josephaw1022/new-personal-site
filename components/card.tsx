import type { ReactElement } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



// The media card component
export function MediaCard({
    title,
    description,
    imageUrl,
    actions,
    altImage,
}: MediaCardProps): ReactElement {
    return (
        <Card sx={{ width: 450, height: 430 }} className={"my-10 md:mx-10 md:my-2 w-48 md:w-56 lg:w-64 duration-150 "}>
            <CardMedia
                component={"img"}
                height={"120px"}
                image={imageUrl}
                backgroundPosition={"center"}
                alt={altImage}
            />
            <CardContent sx={{ heigth: 140 }}>
                <Typography gutterBottom variant={"h5"} component={"div"}>
                    {title}
                </Typography>
                <Typography variant={"body2"} color={"text.secondary"}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {actions}
            </CardActions>
        </Card>
    );
}


interface MediaCardProps {

    // The title of the card
    title?: string;

    // The description of the card
    description?: string;

    // The url of the image to display
    imageUrl: string;

    // Action buttons for the buttom of the card
    actions?: React.ReactNode;

    // The alt text of the image
    altImage: string;
}