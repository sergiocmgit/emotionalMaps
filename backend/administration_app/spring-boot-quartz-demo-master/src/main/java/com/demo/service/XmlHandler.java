package com.demo.service;

import java.io.FileWriter;
import java.io.IOException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

//This class is needed because of the "out of memory" exception caused with DOM parser
public class XmlHandler extends DefaultHandler {

	private SAXParserFactory factory;
	private SAXParser saxParser;
	private String uri;

	public XmlHandler(String uri) {
		this.factory = SAXParserFactory.newInstance();
		try {
			this.saxParser = factory.newSAXParser();
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		}
		this.uri = uri;
	}

	// Reads the xml file of its class and writes in "myFile" all the way ids
	// separated by '\n'
	public void parseWays(FileWriter myFile) {
		DefaultHandler handler = new DefaultHandler() {
			// This functions fires everytime '<' is read
			public void startElement(String uri, String localName, String qName, Attributes attributes)
					throws SAXException {
				// If the element read is way, its is written
				if (qName.equals("way")) {
					try {
						myFile.write(attributes.getValue("id") + '\n');
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			}
		};
		try {
			// It inits the reading of the xml file
			saxParser.parse(this.uri, handler);
		} catch (SAXException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}