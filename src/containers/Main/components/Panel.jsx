import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components/'
import { CardPanelContentStyled, ItemStyled } from './styles'

import COUNTRIES from '../../../common/constants/countries'

const navigatorHasShare = navigator.share

function Panel({updatedAt, onChange, data, country, getCovidData }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const renderCountry = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`Bandeira do ${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )
  

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID-19</Typography>
          <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updatedAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountry)}
            </Select>
          </div>
        </div>
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)