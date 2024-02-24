import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Price.module.scss';
import Container from 'shared/ui/container';
import Accordion from 'shared/ui/Accordion';
import 'i18next';

const Price = ({className}) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(s.Price, {}, [className])} id="prices">
			<Container>
				<h2 className={s.title}>{t('price.title')}</h2>
				<Accordion />
			</Container>
		</div>
	);
};

export default memo(Price);
