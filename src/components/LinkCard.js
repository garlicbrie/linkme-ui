import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    Card as MaterialCard,
    CardContent as MaterialCardContent,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const CardContent = styled(MaterialCardContent)`
    background-color: #EFF3F6;
`;

const LinkCard = props => {
    return (
        <div>
            <MaterialCard>
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>Python Tutorial for Beginners | Full Python Programming Course [2019]</Typography>
                    <Typography component="p">This is where description would go wow amazing that’s so awsome this is a cool article</Typography>
                    <Typography component="p">watched by user</Typography>
                    <Typography component="p">added by user</Typography>
                </CardContent>
            </MaterialCard>
        </div>
    );
};

LinkCard.propTypes = {
    
};

export default LinkCard;