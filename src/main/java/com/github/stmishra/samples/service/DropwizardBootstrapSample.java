package com.github.stmishra.samples.service;


import com.yammer.dropwizard.Service;
import com.yammer.dropwizard.assets.AssetsBundle;
import com.yammer.dropwizard.config.Bootstrap;
import com.yammer.dropwizard.config.Environment;
import com.yammer.dropwizard.jdbi.DBIFactory;
import com.github.stmishra.samples.api.DropwizardBootstrapSampleResource;
import com.github.stmishra.samples.configuration.DropwizardBootstrapConfiguration;
import com.github.stmishra.samples.db.DropwizardBootstrapDAO;
import org.skife.jdbi.v2.DBI;


public class DropwizardBootstrapSample extends Service<DropwizardBootstrapConfiguration> {
    public static void main(String[] args) throws Exception {
        new DropwizardBootstrapSample().run(args);
    }

    @Override
    public void initialize(Bootstrap<DropwizardBootstrapConfiguration> bootstrap) {
        bootstrap.setName("dropwizard-bootstrap-config");
        bootstrap.addBundle(new AssetsBundle("/assets","/"));
    }

    @Override
    public void run(DropwizardBootstrapConfiguration configuration,
                    Environment environment) throws ClassNotFoundException {
        final DBIFactory factory = new DBIFactory();
        final DBI jdbi = factory.build(environment, configuration.getDatabaseConfiguration(), "sqlite");
        final DropwizardBootstrapDAO dao = jdbi.onDemand(DropwizardBootstrapDAO.class);
        environment.addResource(new DropwizardBootstrapSampleResource(dao));

    }
}
