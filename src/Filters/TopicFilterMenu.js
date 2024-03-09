import React from 'react'
import { MenuItem } from '@mui/material';
const TopicFilterMenu = (data) => {
    let topic = [];
    function setTopic(data){
        topic = data;
    }
    let d = data?.map((e) => {
      return e?.topic;
    });
    d = d.map((e) => {
      return e?.charAt(0).toUpperCase() + e?.slice(1);
    });
    setTopic(d.sort());
    const uniqueTopics = topic.filter((e, i) => {
      return topic.indexOf(e) === i;
    });
   let menu = uniqueTopics?.map((e, i) => {
      return (
        <MenuItem value={e} key={i}>
          {e}
        </MenuItem>
      );
    });
return  menu;
  };
export default TopicFilterMenu
