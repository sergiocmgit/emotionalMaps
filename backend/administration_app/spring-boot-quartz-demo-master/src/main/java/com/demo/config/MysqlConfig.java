package com.demo.config;

import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.LocalEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(entityManagerFactoryRef = "externEmotionEntityManagerFactory", transactionManagerRef = "externEmotionTransactionManager", basePackages = {
		"com.demo.repository" })
public class MysqlConfig {

	@Autowired
	private Environment env;

	@Bean(name = "externEmotionDataSource")
	@ConfigurationProperties(prefix = "spring.extern-emotion.datasource")
	public DataSource externEmotionDataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setUrl(env.getProperty("spring.extern-emotion.datasource.url"));
		dataSource.setUsername(env.getProperty("spring.extern-emotion.datasource.username"));
		dataSource.setPassword(env.getProperty("spring.extern-emotion.datasource.password"));
		dataSource.setDriverClassName(env.getProperty("spring.extern-emotion.datasource.driver-class-name"));
		return dataSource;
	}

	@Bean(name = "externEmotionEntityManager")
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(externEmotionDataSource());
		em.setPackagesToScan("com.demo.entity");

		HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);

		Map<String, Object> properties = new HashMap<>();
		properties.put("hibernate.dialect", env.getProperty("spring.extern-emotion.database-platform"));
		em.setJpaPropertyMap(properties);

		return em;
	}

	@Bean(name = "externEmotionEntityManager")
	public PlatformTransactionManager transactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
		return transactionManager;
	}

}