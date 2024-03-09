import FilterId from "../Components/FilterForm/FilterId";
export const EndYearFilter = (data) => {
  const f = FilterId(data)
    .map((e) => {
      return document.getElementById(e) != null
        ? document.getElementById(e)
        : "";
    })
    .filter((e) => {
      return e != "";
    });
  const filter = f.map((e, i) => {
    return f[i].innerText;
  });
  const val = data?.filter((e, i) => {
    return e?.end_year == filter[0];
  });
  return val;
};
export const SourceFilter = (data)=>{
    const f = FilterId(data)
    .map((e) => {
      return document.getElementById(e) != null
        ? document.getElementById(e)
        : "";
    })
    .filter((e) => {
      return e != "";
    });
  const filter = f.map((e, i) => {
    return f[i].innerText?.toLowerCase();
  });
  const val = data?.filter((e, i) => {
    return e?.source?.toLowerCase() == filter[1]?.toLowerCase();
  });
  return val;
}
export const TopicFilter = (data)=>{
    const f = FilterId(data)
    .map((e) => {
      return document.getElementById(e) != null
        ? document.getElementById(e)
        : "";
    })
    .filter((e) => {
      return e != "";
    });
  const filter = f.map((e, i) => {
    return f[i].innerText?.toLowerCase();
  });
  const val = data?.filter((e, i) => {
    return e?.topic?.toLowerCase() == filter[2]?.toLowerCase();
  });
  
  return val;
}
export const PestFilter = (data)=>{
    const f = FilterId(data)
    .map((e) => {
      return document.getElementById(e) != null
        ? document.getElementById(e)
        : "";
    })
    .filter((e) => {
      return e != "";
    });
  const filter = f.map((e, i) => {
    return f[i].innerText?.toLowerCase();
  });
  const val = data?.filter((e, i) => {
    return e?.pestle?.toLowerCase() == filter[3]?.toLowerCase();
  });
  return val;
}
export const SectorFilter = (data)=>{
    const f = FilterId(data)
    .map((e) => {
      return document.getElementById(e) != null
        ? document.getElementById(e)
        : "";
    })
    .filter((e) => {
      return e != "";
    });
  const filter = f.map((e, i) => {
    return f[i].innerText?.toLowerCase();
  });
  const val = data?.filter((e, i) => {
    return e?.sector?.toLowerCase() === filter[4]?.toLowerCase();
  });
  
  return val;
}
export const RegionFilter = (data)=>{
    const f = FilterId(data)
    .map((e) => {
      return document.getElementById(e) != null
        ? document.getElementById(e)
        : "";
    })
    .filter((e) => {
      return e != "";
    });
  const filter = f.map((e, i) => {
    return f[i].innerText?.toLowerCase();
  });
  const val = data?.filter((e, i) => {
    return e?.region?.toLowerCase() == filter[5]?.toLowerCase();
  });
  return val;
}
export const CountryFilter = (data)=>{
    const f = FilterId(data)
    .map((e) => {
      return document.getElementById(e) != null
        ? document.getElementById(e)
        : "";
    })
    .filter((e) => {
      return e != "";
    });
  const filter = f.map((e, i) => {
    return f[i].innerText?.toLowerCase();
  });
  const val = data?.filter((e, i) => {
    return e?.country?.toLowerCase() == filter[6]?.toLowerCase();
  });
  return val;
}
export const IntensityFilter = (data)=>{
    const f = FilterId(data)
    .map((e) => {
      return document.getElementById(e) != null
        ? document.getElementById(e)
        : "";
    })
    .filter((e) => {
      return e != "";
    });
  const filter = f.map((e, i) => {
    return f[i].innerText;
  });
  const val = data?.filter((e, i) => {
    return e?.intensity == filter[7];
  });
  return val;
}
export const CityFilter = (data)=>{
    const f = FilterId(data)
    .map((e) => {
      return document.getElementById(e) != null
        ? document.getElementById(e)
        : "";
    })
    .filter((e) => {
      return e != "";
    });
  const filter = f.map((e, i) => {
    return f[i].innerText?.toLowerCase();
  });
  const val = data?.filter((e, i) => {
    return e?.city?.toLowerCase() == filter[8]?.toLowerCase();
  });
  return val;
}